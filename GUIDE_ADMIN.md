# 🔐 Guide d'Administration - LA MAISON DE L'ÉVEIL

## 📍 Accès à l'Interface Admin

**URL d'accès :** `http://localhost:5173/admin`

L'interface admin est accessible uniquement via cette route spéciale. Elle n'apparaît pas dans la navigation publique du site.

---

## 🎛️ Fonctionnalités de l'Admin

### 1️⃣ **Tableau de Bord** (Dashboard)

Le tableau de bord affiche :
- **Statistiques en temps réel** :
  - Nombre de témoignages
  - Membres actifs
  - Projets/Actions
  - Médias vidéos

- **Actions Rapides** :
  - Ajouter un témoignage
  - Gérer les membres
  - Gérer les vidéos
  - Modifier les contenus

---

### 2️⃣ **Gestion des Témoignages**

📝 **Fonctionnalités :**
- Voir tous les témoignages (tableau complet)
- Ajouter un nouveau témoignage
- Modifier un témoignage existant
- Supprimer un témoignage
- Gérer le statut (Publié / En attente)

**Données affichées :**
- Auteur
- Titre
- Date de publication
- Statut
- Actions (Modifier / Supprimer)

---

### 3️⃣ **Gestion des Membres**

👥 **Fonctionnalités :**
- Voir tous les membres (cartes visuelles)
- Ajouter un nouveau membre
- Voir le profil détaillé
- Gérer le statut (Actif / Inactif)

**Types de membres :**
- Bénévoles
- Membres adhérents
- Donateurs

---

### 4️⃣ **Gestion des Actions/Projets**

📚 **Fonctionnalités :**
- Voir tous les projets/actions
- Ajouter un nouveau projet
- Modifier un projet existant
- Supprimer un projet

**Exemples de projets :**
- Retraites Spirituelles
- Accompagnement Individuel
- Ateliers de méditation
- Événements communautaires

---

### 5️⃣ **Gestion des Médias**

🎬 **Fonctionnalités :**

**A. Liens Vidéo (TikTok / YouTube)**
- Mettre à jour le lien TikTok du témoignage featured
- Mettre à jour le lien YouTube du témoignage featured
- Ces liens apparaissent sur la page "Nous Rejoindre"

**B. Images et Galerie**
- Uploader des images
- Gérer la galerie photo
- Images pour les projets et événements

**Format des liens :**
- TikTok : `https://www.tiktok.com/@lamaisondeleveil/video/[ID_VIDEO]`
- YouTube : `https://www.youtube.com/watch?v=[ID_VIDEO]`

---

### 6️⃣ **Gestion des Contenus**

✍️ **Fonctionnalités :**

**A. Page d'Accueil**
- Modifier le titre principal
- Modifier la description
- Personnaliser le message d'accueil

**B. Page À Propos**
- Modifier le verset biblique
- Mettre à jour la mission
- Gérer les objectifs
- Modifier la vision

**C. Autres Pages**
- Personnaliser les textes de chaque section
- Mettre à jour les informations de contact

---

## 🔒 Sécurité

### À Faire (Prochaines Étapes) :

1. **Système d'Authentification**
   - Ajouter une page de login (`/admin/login`)
   - Implémenter JWT ou session-based auth
   - Protéger la route `/admin` avec un guard

2. **Gestion des Rôles**
   - Admin principal
   - Modérateur
   - Éditeur de contenu

3. **Audit Log**
   - Tracker toutes les modifications
   - Historique des actions admin

---

## 📊 Architecture Technique

### Structure des Fichiers

```
src/
  pages/
    AdminPage.tsx          # Page principale admin
  components/
    admin/                 # (À créer) Composants admin réutilisables
      TestimonialForm.tsx
      MemberForm.tsx
      ProjectForm.tsx
```

### État de Gestion (À Implémenter)

Pour une gestion complète, il faudra :
- **Backend API** : Créer des endpoints pour CRUD operations
- **Base de données** : Stocker les données (Supabase recommandé)
- **State Management** : React Query ou Redux pour gérer l'état

---

## 🚀 Prochaines Améliorations

1. **Connexion avec Supabase**
   - Authentification
   - Database CRUD
   - Storage pour les images

2. **Éditeur WYSIWYG**
   - Pour les contenus textuels
   - Exemple : TinyMCE, Quill

3. **Dashboard Analytics**
   - Graphiques de croissance
   - Statistiques d'engagement
   - Métriques de conversion

4. **Système de Notifications**
   - Alertes pour nouveaux témoignages
   - Notifications de nouveaux membres
   - Rappels d'actions à faire

5. **Export de Données**
   - Exporter les témoignages en PDF
   - Rapport mensuel automatique
   - Backup des données

---

## 📞 Support

Pour toute question ou problème technique :
- **Email** : admin@maisondeleveil.org
- **Développeur** : digidesk.pro

---

**Dernière mise à jour :** Octobre 2025
