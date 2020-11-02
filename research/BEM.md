# Block Element Modifier - BEM

 *Block element modifier* is a popular naming convention for classes in HTML and CSS, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.
<br><br>

![](https://miro.medium.com/max/2400/1*_4kaeWfEWcuII7Lld1lcuw.gif)
<br><br>

### Block

Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal - there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well. 
<br>
*HTML - Any DOM node can be a **block** if it accepts a class name.*
<br><br>

### Element

Parts of a block and have no standalone meaning. Any element is semantically tied to its block.
<br>
*HTML - Any DOM node within a block can be an **element.** Within a given block, all elements are semantically equal.*
<br><br>

### Modifier

Flags on blocks or elements. Use them to change appearance, behavior or state.
<br>
*HTML - Modifier is an extra class name which you add to a block/element DOM node. Add modifier classes only to blocks/elements they modify, and keep the original class.*
<br><br>

#### Advantages

* **Reusability:** <br>Composing independent blocks in different ways and reusing them intelligently reduces the amount of CSS code that you will have to maintain.
* **Structure:** <br>BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.
* **Modularity:** <br>Block styles are never dependent on other elements on a page, so you will never experience problems from cascading.

