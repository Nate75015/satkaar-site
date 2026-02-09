#!/bin/bash

echo "======================================"
echo "🔐 VALEURS À COPIER DANS GITHUB"
echo "======================================"
echo ""

if [ ! -f .env ]; then
  echo "❌ Fichier .env introuvable!"
  exit 1
fi

echo "📍 Allez sur:"
echo "   https://github.com/VOTRE_USERNAME/satkaar-site/settings/secrets/actions"
echo ""

echo "1️⃣  Secret : GCP_PROJECT_ID"
echo "   Valeur  : $(grep GCP_PROJECT_ID .env | cut -d= -f2)"
echo ""

echo "2️⃣  Secret : GCP_SA_KEY_BASE64"
echo "   Valeur  : (voir ci-dessous, très longue)"
echo ""
echo "────────────────────────────────────────"
grep GCP_SA_KEY_BASE64 .env | cut -d= -f2
echo "────────────────────────────────────────"
echo ""

echo "💡 ASTUCE: Pour copier automatiquement la clé base64:"
echo "   grep GCP_SA_KEY_BASE64 .env | cut -d= -f2 | pbcopy"
echo ""
echo "✅ Après avoir ajouté les secrets, testez avec:"
echo "   git push  (ou GitHub Actions > Run workflow)"
