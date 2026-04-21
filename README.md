# Restaurant Template V2 — WebSell

Template site web restaurant moderne avec animations GSAP + Framer Motion.

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP + ScrollTrigger** (animations au scroll)
- **Framer Motion** (micro-interactions)

## Sections

1. **Hero** — Titre animé lettre par lettre, background parallax, CTA
2. **About** — Image + texte avec reveal au scroll, stats animées
3. **MenuPreview** — Grid de 4 plats avec hover effects
4. **Gallery** — Masonry grid avec lightbox
5. **Contact** — Formulaire de réservation + infos
6. **Footer** — Liens, réseaux sociaux, contact

## Personnalisation

### 1. Images

Remplace les fichiers dans `/public/images/` :
- `hero-bg.jpg` — Image de fond hero
- `gallery-1.jpg` à `gallery-6.jpg` — Photos galerie

### 2. Textes

Dans chaque fichier de `/app/sections/`, remplace les `[...]` par tes contenus :

**Hero.tsx**
```tsx
const title = "L'Art du Goût"  // ← Titre du restaurant
// Ligne 75 : sous-titre
// Ligne 84 : texte CTA
```

**About.tsx**
```tsx
// Lignes 55-62 : Description histoire
// Lignes 68-73 : Stats (35+, 50k+, 4.9)
```

**MenuPreview.tsx**
```tsx
const dishes = [
  { name: "[PLAT 1]", description: "...", price: "[PRIX]", tag: "Signature" },
  // ...
]
```

**Contact.tsx & Footer.tsx**
- `[ADRESSE DU RESTAURANT]`
- `[NUMÉRO DE TÉLÉPHONE]`
- `[EMAIL]`
- `[NOM RESTAURANT]`
- `[HORAIRES D'OUVERTURE]`

### 3. Couleurs

Modifie dans `globals.css` :
```css
:root {
  --color-primary: #1a1a1a;    /* Texte principal */
  --color-secondary: #c9a962;  /* Or/accent */
  --color-accent: #e8d5b5;     /* Beige clair */
  --color-bg: #fafafa;         /* Fond */
}
```

### 4. Polices

Dans `layout.tsx`, change les imports :
```tsx
import { Inter, Playfair_Display } from 'next/font/google'
// Remplace par tes polices
```

## Déploiement

1. **Build local**
   ```bash
   npm install
   npm run build
   ```

2. **Vercel (gratuit)**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Export statique**
   Le site est exporté dans `/dist/`, prêt pour tout hébergement statique.

## Personnalisation avancée

### Ajouter un plat au menu

Dans `MenuPreview.tsx`, ajoute un objet dans `dishes` :
```tsx
{
  name: "Tchep",
  description: "Riz poisson traditionnel sénégalais",
  price: "12 000 FCFA",
  tag: "Nouveau"  // ou "" pour pas de badge
}
```

### Changer les animations

Les animations GSAP sont dans `useEffect` de chaque section. 
Documentation : https://gsap.com/docs/v3/

### Formulaire fonctionnel

Dans `Contact.tsx`, remplace `handleSubmit` par ton backend :
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('/api/reservation', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

## Checklist livraison client

- [ ] Remplacer toutes les images
- [ ] Personnaliser tous les textes [PLACEHOLDERS]
- [ ] Vérifier les infos contact (adresse, tel, email)
- [ ] Tester le formulaire
- [ ] Vérifier responsive (mobile)
- [ ] Déployer + envoyer lien au client

---

Créé par Cloclo 🦉 pour WebSell / Meissa
