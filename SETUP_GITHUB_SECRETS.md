# 🔐 Configuration des Secrets GitHub

## ❌ Problème actuel

Le workflow GitHub Actions échoue avec l'erreur :
```
Error: Secret GCP_SA_KEY_BASE64 is not set!
```

## ✅ Solution : Ajouter les secrets dans GitHub

### Étape 1 : Copier les valeurs depuis votre `.env`

Votre fichier `.env` local contient déjà les bonnes valeurs :

```bash
# Copier GCP_PROJECT_ID
grep GCP_PROJECT_ID .env | cut -d= -f2

# Copier GCP_SA_KEY_BASE64  
grep GCP_SA_KEY_BASE64 .env | cut -d= -f2 | pbcopy
```

La deuxième commande copie automatiquement la clé base64 dans votre presse-papiers.

**OU** utilisez le script fourni :
```bash
./show-secrets.sh
```

### Étape 2 : Ajouter dans GitHub

1. **Ouvrir la page des secrets** :
   ```
   https://github.com/VOTRE_USERNAME/satkaar-site/settings/secrets/actions
   ```

2. **Ajouter le premier secret** :
   - Cliquer sur **"New repository secret"**
   - Name: `GCP_PROJECT_ID`
   - Secret: `satkaar-dev`
   - Cliquer sur **"Add secret"**

3. **Ajouter le deuxième secret** :
   - Cliquer sur **"New repository secret"**
   - Name: `GCP_SA_KEY_BASE64`
   - Secret: Coller la valeur copiée (commande `pbcopy` ci-dessus)
   - Cliquer sur **"Add secret"**

### Étape 3 : Tester le déploiement

Une fois les secrets ajoutés, testez :

**Option A : Push le code**
```bash
git add .
git commit -m "Fix GitHub Actions workflow"
git push
```

**Option B : Déclencher manuellement**
1. Aller sur GitHub → onglet **Actions**
2. Cliquer sur **"Deploy to Google Cloud Run"**
3. Cliquer sur **"Run workflow"** → **"Run workflow"**

## 🎉 Résultat attendu

Le workflow devrait maintenant :
- ✅ Décoder les credentials GCP
- ✅ S'authentifier à Google Cloud
- ✅ Déployer sur Cloud Run avec succès

## 🆘 Si vous obtenez "Permission denied - Artifact Registry"

Si le déploiement échoue avec l'erreur `PERMISSION_DENIED: Permission 'artifactregistry.repositories.get'`, les permissions ont déjà été ajoutées automatiquement.

Si vous devez les reconfigurer, utilisez :

```bash
./setup-gcp-permissions.sh
```

Ou manuellement :

```bash
# Activer les APIs nécessaires
gcloud services enable artifactregistry.googleapis.com --project=satkaar-dev
gcloud services enable cloudbuild.googleapis.com --project=satkaar-dev

# Ajouter les permissions au compte de service
gcloud projects add-iam-policy-binding satkaar-dev \
  --member="serviceAccount:satkaar-site@satkaar-dev.iam.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding satkaar-dev \
  --member="serviceAccount:satkaar-site@satkaar-dev.iam.gserviceaccount.com" \
  --role="roles/cloudbuild.builds.builder"
```

## 🆘 Autres problèmes

Vérifiez que :
- Les secrets sont bien nommés `GCP_PROJECT_ID` et `GCP_SA_KEY_BASE64` (pas d'espaces, respect de la casse)
- La valeur base64 est complète (elle doit être très longue, ~2000+ caractères)
- Le compte de service a toutes les permissions nécessaires (voir `GITHUB_ACTIONS_FIXED.md`)
