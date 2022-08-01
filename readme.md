# Accordion Web Component

## Installation

```bash
 npm i @phemium-costaisa/accordion
```

## Usage

In your HTML files:

```
 <edmbn-accordion header-title="Title" expanded bordered>
    <div slot="content">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
 </edmbn-accordion>
```

Include attribute **slot="content"** to all the content that you want to be inside the accordion.

### Javascript or AngularJS (1.x)

```
<script src="./plugins/edmbn-accordion.js"></script>
```

### Angular 2+

Somewhere in your project (e.g. `main.ts`):

```
import { defineCustomElements as accordionLoader } from 'edmbn-accordion/loader';
accordionLoader(window);
```

### React

On your index.js:

```
import { defineCustomElements as accordionLoader } from 'edmbn-accordion/loader';
accordionLoader(window);
```

### Vue

```
import { defineCustomElements as accordionLoader } from 'edmbn-accordion/loader';
Vue.config.ignoredElements = [/test-\w*/];
accordionLoader(window);
```

## Properties

|      Property      | Default |                   Description                   |
| :----------------: | :-----: | :---------------------------------------------: |
|   `header-title`   |         |         Set the accordion header title.         |
|     `expanded`     | `false` |            Set the default position.            |
|     `bordered`     | `false` | Set border top and bottom by default on header. |
| `lost-focus-close` | `false` | Whether to close accordion when loosing focus.  |
| `observe-content`  | `false` |      Set to true when content is dynamic.       |
|      `debug`       | `false` |         Set to true for debugging logs.         |

## Slots

| Name      | Description                                           |
| --------- | ----------------------------------------------------- |
| `content` | `HTML Content to put inside accordion when unfolded`  |
| `right`   | `HTML Content to put in the right part of the header` |

## Customize CSS

|          Variable           |                           Default                           |
| :-------------------------: | :---------------------------------------------------------: |
|      `--header-height`      |                            50px                             |
| `--header-background-color` |                            white                            |
|   `--header-button-color`   |                            black                            |
|   `--header-button-width`   |                           1.5rem                            |
|    `--header-text-color`    |                            black                            |
|   `--header-font-weight`    |                             700                             |
|    `--header-font-size`     |                            1rem                             |
|    `--header-border-top`    | var(--border-width) var(--border-style) var(--border-color) |
|  `--header-border-bottom`   | var(--border-width) var(--border-style) var(--border-color) |
|   `--header-border-left`    |                            none                             |
|   `--header-border-right`   |                            none                             |
|      `--border-style`       |                            solid                            |
|      `--border-width`       |                             1px                             |
|      `--border-color`       |                            #ccc                             |

## Contribute

```bash
git clone https://github.com/phemium/accordion.git
cd accordion
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```
