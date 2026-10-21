# AXA Lit Card Component

This project was made as an exercice for an interview. It contains a card component that follows the specifications of th AXA design system using Lit to render it and Storybook to demo it. The whole project was built with React Vite and unit tested with Jest.

## Dev talk (French)
- J'ai rencontré ma prmière difficulté lors de l'installation de Lit avec le framework React NextJS. Lors du lancement en mode Dev, le programme retournait des erreures sur la partie declaration des propriétés avec les decorateurs du type(@property({type: Number})). J'ai opté a utiliser Vite qui avait accepté les deux types de déclarations (avec décoration et standard).
- J'ai trouvé une ambiguité dans le document des requirements. Plus spécifiquement sur le rendu le la Card avec une image en lg. Les deux images en dessous montrent ce qui me semble etre le layout d'une image lg dans deux situation differente sans que je ne sache le cas d'utilisation de chacune. En temps normal, ce point aura été discuté avec l'equipe UI/UX ou le Product Owner pour definir le cas d'usage.
![plot](./images/Screenshot-image-lg.png)
![plot](./images/Screenshot-image-full-width.png)
Dans le doute, j'ai rajouté une propriété booleenne "fullCard" qui change la carte entre les deux version.
- Dans les conditions de cette démo, j'ai laissé le composant Card sans width ou max width definit pour qu'elle remplisse le balise parente. Cette approche est a discuter avec le tech-lead en temps normal avant de commencer a développer.
- Je n'ai pas trouvé comment intégrer la fonctionalité breakpoint. Son cas d'usage m'a semblé un peu flou dans le Storybook d'AXA. J'ai voulu l'ajouter directement dans le CSS du composant mais sa valeur était dynamique. J'ai du faire recours a l'IA Copilot qui avait suggéré d'ajouter un eventListner dans le shadowRoot du composant. Je n'ai pas ajouté le code suite aux conditions demandées lors de cet exercice.
- Toute la partie de configuration des propriété isInverse, inverted, fullCard avait été developpée initialement dans la partie typescript en créant une fonction qui retournait le style de chaque balise en fonction des paramètres en entré. Cette fonction est devenue très rapidement compliqué. J'ai opté a tout refaire et a utiliser les overwrite des classes CSS.
-J'ai fait en sorte que le theme sombre du bouton et du lien suive le theme de la carte suivant les exigences mis dans le document. C'est normalement un sujet a discuter car il y'a une petite ambiquité entre la maquette du document et les propriété du Storybook AXA.

## Requirements

- Node.js
- npm

## Installation

```sh
npm install
npm run dev
```
### Storybook

```sh
npm run storybook
```

You can test the default card component in AXA/Card with the properties cited below.

### Unit tests

```sh
npm test -- --runInBand
```

## Component properties


| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'sm' \| 'md' \| 'lg' \| 'bg'` | `'lg'` | Image size and card layout. |
| `image` | `string` | `''` | Image URL. |
| `cardTitle` | `string` | `''` | Card title text. |
| `subhead` | `string` | `''` | Card subtitle text. |
| `cardDate` | `string` | `''` | Displayed Date. |
| `content` | `string` | `''` | Card body text. |
| `links` | `LinkProp[]` | `[]` | Actions rendered beneath the body text. |
| `isInverse` | `boolean` | `false` | Switches between light and dark mode. |
| `inverted` | `boolean` | `false` | Reverses the image and text layout. |
| `fullCard` | `boolean` | `true` | Extra property for lg Card format. |
| `breakpoint` | `number` | `500` | Breakpoint size in pixel for when the card collapses. |

The format of LinkProp is as follow
```json
LinkProp {
    isInverse?: boolean;
    label: string;
    type: 'link' | 'button';
    url: string;
    variation: 'primary' | 'secondary';
}
```