# ng-rough-notation

![Banner](https://i.imgur.com/bBH3m5W.png)

Simple and configurable directive to annotate an element.

This is an Angular 10 wrapper for [rough-notation](https://roughnotation.com).

## Demo

[Demo page](https://ng-rough-notation-demo.stackblitz.io/)

[StackBlitz sandbox](https://stackblitz.com/edit/ng-rough-notation-demo)

## Installation

```bash
npm install ng-rough-notation
```

Add `RoughNotationModule` to your module imports :
``` typescript
import { RoughNotationModule } from 'ng-rough-notation';

@NgModule({
    ...
    imports: [RoughNotationModule],
})
export class AppModule {}

```

## Usage

Use the `roughNotation` directive on any element :

 ``` html
<span roughNotation>Some content</span>
 ```

#### Config object

You can provide a configuration object to the directive.

 ``` html
<span [roughNotation]="{ type: 'highlight', color: '#F44336' }"></span>
 ```

The config object should represent a partial [RoughAnnotationConfigBase](https://github.com/pshihn/rough-notation/blob/979cdd33d8825df4e0124de17e4e2433e1f6e4a6/src/model.ts#L16) interface.

*Every property is optional since a default config is predefined.*

| Property          | Type                                                         | Default value                             |
| ----------------- | ------------------------------------------------------------ | ----------------------------------------- |
| type              | `'underline'`, `'box'`, `'circle'`, `'highlight'`, `'strike-through'`, `'crossed-off'`, `'bracket'` | `'highlight'`                             |
| animate           | `boolean`                                                    | `true`                                    |
| animationDuration | `number`                                                     | `800`                                     |
| animationDelay    | `number`                                                     | `0`                                       |
| color             | `string`                                                     | See [Automatic colors](#automatic-colors) |
| strokeWidth       | `number`                                                     | `1`                                       |
| padding           | `number`,  `[number, number]`, `[number, number, number, number]` | `5`                                       |
| iterations        | `number`                                                     | `2`                                       |
| brackets          | `'left'`, `'right'`, `'top'`, `'bottom'`,  [...`'left'`, `'right'`, `'top'`, `'bottom'`] | `'right'`                                 |

Please refer to the official doc for [property descriptions](https://github.com/pshihn/rough-notation#configuring-the-annotation).

#### Inputs

| Name                   | Type      | Default value | Description                                                  |
| ---------------------- | --------- | ------------- | ------------------------------------------------------------ |
| **show**               | `boolean` | `true`        | Sets the visibility of the annotation.                       |
| **annotatedTextColor** | `boolean` | `true`        | Specify the CSS `color` value the element should have <u>only when it is annotated</u>. <br />Returns to its original color when the annotation is hidden. |

#### Outputs

| Name                | Type                    | Description                                          |
| ------------------- | ----------------------- | ---------------------------------------------------- |
| **isShowingChange** | `EventEmitter<boolean>` | Triggers each time the annotation visibility changes |

#### Instance

You can get a reference to the `RoughNotationDirective` instance.

```html
<span roughNotation #instance="roughNotation"></span>
```

This is useful if you want to toggle programmatically the annotation.

| Method       | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| **toggle()** | Shows or hide the annotation according to its current state |

## Automatic colors

A set of default colors is defined for each annotation *type*. It follows the scheme on the [original website](https://roughnotation.com) so you can omit the *color* property if you're happy with the defaults. 

| Type           | Default color                                |
| :------------- | -------------------------------------------- |
| highlight      | <span style="color:#FFF176">`#FFF176`</span> |
| circle         | <span style="color:#0D47A1">`#0D47A1`</span> |
| box            | <span style="color:#4A148C">`#4A148C`</span> |
| strike-through | <span style="color:#1B5E1F">`#1B5E1F`</span> |
| underline      | <span style="color:#B71C1B">`#B71C1B`</span> |
| crossed-off    | <span style="color:#F57F17">`#F57F17`</span> |
| bracket        | <span style="color:#FF0000">`#FF0000`</span> |

## Global configuration

You can provide a global default configuration for the whole module.

For that you can use the `forRoot()` method on the module.

```typescript
RoughNotationModule.forRoot({
    type: 'circle',
    animationDuration: 1000,
})
```

*Note: this global configuration will be overriden by the configurations provided to the `roughNotation` directives.*

## Annotation group

You can use the `rough-notation-group` component to wrap and toggle a bunch of annotations.

```html
<rough-notation-group [show]="showGroup">
   <div>
      <span roughNotation>First annotation</span>
   </div>
   <div>
      <span [roughNotation]="{ type: 'underline' }">Second annotation</span>
   </div>
</rough-notation-group>
```
