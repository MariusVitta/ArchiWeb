# ArchiWeb

Application web développée avec **Angular** pour la gestion et la visualisation de données liées à l'architecture et aux projets.

L'application utilise notamment **Angular 19**, **Leaflet**, **AdminLTE**, Bootstrap et plusieurs bibliothèques JavaScript/CSS historiques intégrées au projet.

## 🛠️ Stack technique

* **Angular 19.2.x**
* **Angular CLI 19.2.x**
* **TypeScript 5.8.x**
* **Node.js 22+**
* **npm**
* **RxJS**
* **Leaflet** — cartographie interactive
* **AdminLTE** — interface d'administration
* **Bootstrap**
* **Font Awesome**
* **Chart.js**
* **Select2**
* **Slick**
* **jQuery**

## 📋 Prérequis

Avant de commencer, vérifiez que les outils suivants sont installés :

```bash
node --version
npm --version
```

Puis installez les dépendances du projet :

```bash
npm install
```

> ⚠️ Le projet contient encore plusieurs dépendances historiques. Évitez `npm audit fix --force` sans vérifier les changements proposés : certaines corrections impliquent des mises à niveau majeures d'Angular ou de bibliothèques utilisées par le projet.

## 🚀 Développement

Pour lancer l'application en environnement de développement :

```bash
npx ng serve client
```

L'application est ensuite accessible à l'adresse indiquée par Angular CLI, généralement :

```text
http://localhost:4200
```

## 🏗️ Build

Pour générer une version de production :

```bash
npx ng build client --configuration production
```

Pour effectuer un build standard :

```bash
npx ng build client
```

Les fichiers générés sont placés dans :

```text
dist/client/
```

> Avec le système de build actuel d'Angular, le dossier de sortie peut évoluer lors d'une future migration du workspace.

## 🗺️ Cartographie

L'application utilise **Leaflet** pour les fonctionnalités cartographiques.

Les styles Leaflet sont chargés depuis :

```text
node_modules/leaflet/dist/leaflet.css
```

## 📁 Structure du projet

```text
ArchiWeb/
├── src/
│   ├── app/                 # Application Angular
│   ├── assets/              # Ressources statiques
│   ├── dist/                # Ressources UI historiques
│   ├── dist2/               # Ressources UI historiques
│   ├── plugins/             # Plugins JavaScript
│   ├── vendor/              # Bibliothèques tierces
│   ├── environments/        # Configuration des environnements
│   ├── main.ts              # Point d'entrée Angular
│   ├── polyfills.ts         # Polyfills
│   └── styles.css           # Styles globaux
├── angular.json             # Configuration Angular CLI
├── package.json             # Dépendances et scripts npm
├── tsconfig.json            # Configuration TypeScript
├── tsconfig.app.json        # Configuration TypeScript de l'application
├── tsconfig.spec.json       # Configuration des tests
└── .browserslistrc         # Navigateurs supportés
```

## 🧪 Tests

Les tests Angular existants peuvent être exécutés avec :

```bash
npx ng test
```

La configuration des tests se trouve notamment dans :

```text
tsconfig.spec.json
```

## 🔍 Vérification du projet

Pour vérifier la version Angular utilisée :

```bash
npx ng version
```

Pour analyser les dépendances vulnérables :

```bash
npm audit
```

Pour appliquer uniquement les corrections non majeures proposées par npm :

```bash
npm audit fix
```

### ⚠️ À propos des vulnérabilités

Le projet contient certaines dépendances anciennes ou transitives qui peuvent apparaître dans `npm audit`.

Certaines corrections automatiques nécessitent une mise à niveau majeure d'Angular ou de bibliothèques historiques. Il est donc recommandé de :

1. vérifier le résultat de `npm audit` ;
2. identifier la dépendance responsable ;
3. vérifier son utilisation dans le projet ;
4. effectuer les mises à jour progressivement ;
5. lancer un build après chaque changement.

Évitez notamment :

```bash
npm audit fix --force
```

sans avoir vérifié les changements proposés.

## 🌐 Navigateurs

La compatibilité des navigateurs est définie dans :

```text
.browserslistrc
```

Le projet cible principalement les navigateurs modernes. Les navigateurs nécessitant une génération ES5 ne sont plus pris en charge par les versions récentes d'Angular CLI.

## 🔄 Mise à jour d'Angular

Le projet est actuellement maintenu sur **Angular 19**.

Pour vérifier l'état des dépendances Angular :

```bash
npx ng version
```

Pour une mise à jour au sein de la branche Angular 19 :

```bash
npx ng update @angular/core@19 @angular/cli@19
```

Après toute mise à jour :

```bash
npm install
npx ng build client
```

Puis vérifier que l'application fonctionne correctement.

## 📦 Déploiement

Le build de production génère les fichiers statiques nécessaires au déploiement dans :

```text
dist/client/
```

Le contenu de ce dossier peut ensuite être servi par le serveur web utilisé par l'environnement de production.

## 🔐 Sécurité

Les alertes de sécurité doivent être traitées régulièrement.

Pour obtenir le détail des vulnérabilités :

```bash
npm audit
```

Les dépendances de production et les dépendances de développement doivent être distinguées avant de décider d'une correction, car certaines vulnérabilités concernent uniquement l'outillage de développement.

## 📌 État du projet

* ✅ Angular 19
* ✅ Build Angular fonctionnel
* ✅ Leaflet intégré
* ✅ Interface AdminLTE/Bootstrap conservée
* ⚠️ Plusieurs bibliothèques historiques encore présentes
* ⚠️ Certaines dépendances transitives présentent des alertes de sécurité
* 🔄 Nettoyage et modernisation des dépendances à poursuivre

## 👤 Auteur

**Marius Vitta**

Projet : **ArchiWeb**
