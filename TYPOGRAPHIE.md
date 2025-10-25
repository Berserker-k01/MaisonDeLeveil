# Configuration Typographique - La Maison de l'Éveil

## 📝 Polices Configurées

### Police Principale : **RADIBTA**
- **Usage** : Titres, navigation, boutons, éléments d'accroche
- **Poids disponible** : Regular (400)
- **Type** : Sans-serif géométrique moderne
- **Format** : OpenType (OTF)
- **Source** : Police locale hébergée dans le projet
- **Classe Tailwind** : `font-radibta`

### Police Secondaire : **Nunito**
- **Usage** : Textes courants, paragraphes, formulaires
- **Poids disponibles** : 300, 400, 600, 700, 800
- **Type** : Sans-serif moderne
- **Classe Tailwind** : `font-nunito`

## 🎨 Hiérarchie Typographique

### Titres (font-radibta)
- Tous les titres sémantiques (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
- Éléments de navigation (Header)
- Boutons et appels à l'action (CTA)
- Labels de formulaire

### Textes courants (font-nunito)
- Corps de texte (body)
- Paragraphes
- Champs de formulaire (inputs, textarea)
- Liens de navigation secondaires
- Descriptions et sous-titres

## 📦 Fichiers Modifiés

### Configuration de base
1. **`src/index.css`** - Import des polices depuis Google Fonts
2. **`tailwind.config.js`** - Configuration des polices personnalisées

### Composants mis à jour
1. **`src/components/Header.tsx`** - Navigation et logo
2. **`src/components/Hero.tsx`** - Section hero
3. **`src/components/Footer.tsx`** - Footer avec liens et newsletter
4. **`src/components/About.tsx`** - Section à propos
5. **`src/components/Actions.tsx`** - Nos actions et galerie
6. **`src/components/Contact.tsx`** - Formulaire de contact
7. **`src/components/JoinUs.tsx`** - Section nous rejoindre
8. **`src/components/Testimonials.tsx`** - Témoignages

## 💡 Comment Utiliser

### Appliquer la police principale (RADIBTA/Crimson Text)
```jsx
<h1 className="font-radibta">Titre Principal</h1>
<button className="font-radibta">Bouton</button>
```

### Appliquer la police secondaire (Nunito)
```jsx
<p className="font-nunito">Texte courant</p>
<input className="font-nunito" />
```

### Héritage automatique
Grâce à la configuration dans `index.css` :
- Tous les éléments `<h1>` à `<h6>` héritent automatiquement de `font-radibta`
- Le `<body>` et ses descendants héritent de `font-nunito`

## ✅ Vérification

Le serveur de développement a été mis à jour automatiquement via Hot Module Replacement (HMR).
Tous les changements sont visibles immédiatement dans le navigateur.

## 🔗 Sources des Polices

**RADIBTA** : Police locale hébergée dans `src/assets/fonts/`
```css
@font-face {
  font-family: 'Radibta';
  src: url('./assets/fonts/Radibta-BF67db8feabe5b2.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Nunito** : Chargée depuis Google Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap');
```

---
*Dernière mise à jour : Octobre 2025*
