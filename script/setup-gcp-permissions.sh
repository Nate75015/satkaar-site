#!/bin/bash

set -e

PROJECT_ID="${1:-satkaar-dev}"
SERVICE_ACCOUNT="satkaar-site@${PROJECT_ID}.iam.gserviceaccount.com"

echo "======================================"
echo "🔧 Configuration des permissions GCP"
echo "======================================"
echo ""
echo "📍 Projet  : $PROJECT_ID"
echo "📍 Compte  : $SERVICE_ACCOUNT"
echo ""

# Vérifier que l'utilisateur est authentifié
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
  echo "❌ Vous n'êtes pas authentifié à gcloud"
  echo "   Exécutez : gcloud auth login"
  exit 1
fi

echo "✅ Utilisateur authentifié"
echo ""

# Activer les APIs nécessaires
echo "🔄 Activation des APIs nécessaires..."
gcloud services enable run.googleapis.com --project=$PROJECT_ID --quiet
gcloud services enable artifactregistry.googleapis.com --project=$PROJECT_ID --quiet
gcloud services enable cloudbuild.googleapis.com --project=$PROJECT_ID --quiet
echo "✅ APIs activées"
echo ""

# Ajouter les rôles nécessaires
echo "🔄 Configuration des permissions du compte de service..."

ROLES=(
  "roles/run.admin"
  "roles/iam.serviceAccountUser"
  "roles/storage.admin"
  "roles/artifactregistry.writer"
  "roles/cloudbuild.builds.builder"
)

for ROLE in "${ROLES[@]}"; do
  echo "   → Ajout du rôle: $ROLE"
  gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="$ROLE" \
    --condition=None \
    --quiet > /dev/null 2>&1 || echo "      (déjà présent)"
done

echo "✅ Permissions configurées"
echo ""

# Créer le repository Artifact Registry si nécessaire
echo "🔄 Vérification du repository Artifact Registry..."
if gcloud artifacts repositories describe cloud-run-source-deploy \
  --location=europe-west1 \
  --project=$PROJECT_ID \
  --quiet > /dev/null 2>&1; then
  echo "✅ Repository 'cloud-run-source-deploy' existe déjà"
else
  echo "   → Création du repository 'cloud-run-source-deploy'..."
  gcloud artifacts repositories create cloud-run-source-deploy \
    --repository-format=docker \
    --location=europe-west1 \
    --description="Repository for Cloud Run source-based deployments" \
    --project=$PROJECT_ID \
    --quiet
  echo "✅ Repository créé"
fi
echo ""

# Vérifier les permissions
echo "📊 Permissions actuelles du compte de service:"
gcloud projects get-iam-policy $PROJECT_ID \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:$SERVICE_ACCOUNT" \
  --format="table(bindings.role)"

echo ""
echo "======================================"
echo "✅ Configuration terminée !"
echo "======================================"
echo ""
echo "💡 Prochaines étapes:"
echo "   1. Ajoutez les secrets dans GitHub (voir SETUP_GITHUB_SECRETS.md)"
echo "   2. Testez le déploiement avec: git push"
