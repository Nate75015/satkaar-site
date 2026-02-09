# Déploiement sur Google Cloud Run

Ce projet est prêt à être déployé sur **Google Cloud Run** (conteneur Docker, scale à zéro, facturation à l’usage).

## Prérequis

- [Google Cloud SDK (gcloud)](https://cloud.google.com/sdk/docs/install)
- Un projet Google Cloud avec la facturation activée
- APIs activées : Cloud Run, Container Registry (ou Artifact Registry)

## 1. Configuration initiale (une fois)

```bash
# Connexion
gcloud auth login

# Projet à utiliser (remplacez par votre PROJECT_ID)
gcloud config set project VOTRE_PROJECT_ID

# Activer les APIs
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

## 2. Déployer

### Option A : build local puis déploiement

```bash
# Build de l’image
make docker-build
# ou : docker build -t satkaar-site .

# Tag pour Artifact Registry (remplacez REGION et PROJECT_ID)
docker tag satkaar-site REGION-docker.pkg.dev/PROJECT_ID/satkaar/satkaar-site:latest

# Connexion Docker à Artifact Registry
gcloud auth configure-docker REGION-docker.pkg.dev

# Push de l’image
docker push REGION-docker.pkg.dev/PROJECT_ID/satkaar/satkaar-site:latest

# Déploiement sur Cloud Run
gcloud run deploy satkaar-site \
  --image REGION-docker.pkg.dev/PROJECT_ID/satkaar/satkaar-site:latest \
  --region europe-west1 \
  --platform managed \
  --allow-unauthenticated
```

### Option B : build dans le cloud (recommandé)

Cloud Run peut builder l’image depuis le code (pas besoin de Docker en local) :

```bash
gcloud run deploy satkaar-site \
  --source . \
  --region europe-west1 \
  --platform managed \
  --allow-unauthenticated
```

À la fin, une URL du type `https://satkaar-site-xxxxx-ew.a.run.app` sera affichée.

## 3. Variables d’environnement (optionnel)

Si vous avez des variables (clés API, etc.) :

```bash
gcloud run deploy satkaar-site \
  --source . \
  --region europe-west1 \
  --set-env-vars "VAR1=valeur1,VAR2=valeur2"
```

Ou via la console : Cloud Run → service → Modifier et déployer → Variables et secrets.

## 4. Domaine personnalisé

Dans la console Cloud Run : sélectionner le service → **Gérer les domaines personnalisés** pour associer votre nom de domaine.

## 5. Déploiement automatique (GitHub Actions)

Un workflow est fourni (`.github/workflows/deploy-cloudrun.yml`) : chaque push sur `main` déclenche un déploiement sur Cloud Run.

### Configuration dans GitHub

1. **Secrets du dépôt** (Settings → Secrets and variables → Actions) :

   | Secret              | Description                                                           |
   | ------------------- | --------------------------------------------------------------------- |
   | `GCP_SA_KEY_BASE64` | Clé JSON du compte de service encodée en **base64** (voir ci‑dessous) |
   | `GCP_PROJECT_ID`    | ID du projet Google Cloud (ex. `mon-projet-123`)                      |

2. **Créer un compte de service et sa clé** (Google Cloud Console) :
   - IAM & Admin → Comptes de service → Créer un compte (ex. `github-actions-deploy`).
   - Accorder les rôles : **Cloud Run Admin**, **Service Account User**, **Storage Admin** (pour Cloud Build).
   - Clé : Créer une clé (JSON), télécharger le fichier, puis l’encoder en base64 et coller le résultat dans le secret `GCP_SA_KEY_BASE64` :

   ```bash
   # Linux / macOS (fichier key.json)
   base64 -i key.json | tr -d '\n' | pbcopy   # macOS : copie dans le presse-papier
   base64 -w0 key.json                         # Linux : affiche sur une ligne
   ```

3. **Activer les APIs** (si pas déjà fait) :

   ```bash
   gcloud services enable run.googleapis.com cloudbuild.googleapis.com
   ```

Après configuration, le déploiement se lance à chaque push sur `main`. Vous pouvez aussi lancer le workflow à la main : Actions → « Deploy to Google Cloud Run » → Run workflow.

---

**Résumé :** la commande la plus simple pour déployer depuis ce repo est :

```bash
gcloud run deploy satkaar-site --source . --region europe-west1 --allow-unauthenticated
```
