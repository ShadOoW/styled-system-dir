<p>Early dev stage, not ready to be used.</p>

# Styled-System-Direction

Provides a `direction` function to add direction (RTL/LTR) aware props to  your component, in the same way you would use style-system functions like `position` or `display`.

```sh
npm i styled-system-direction
```

## Try It Out

[Try it out on CodeSandbox](https://codesandbox.io/s/styled-components-direction-gyq2k)

## Usage

```jsx
import { flexbox, position } from 'styled-system';
import { direction } from 'styled-system-direction';

const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${position}
  ${direction}
`

function App() {
  return (
    // A parent should have dir prop,
    // in a real app, you would add it to the html tag
    <ParentComponent dir='rtl'>
      <Flex
        position="absolute"
        dirRight={0}
        dirBorderRight='1px solid red'
      ></Box>
    </Flex>
  );
};
```

`dirRight` and `dirBorderRight` will create 2 css classes that will look like this:

```css
[dir="ltr"] .dLtAKS {
    right: 0px;
    border-right: 1px solid red;
}

[dir="rtl"] .dLtAKS {
    left: 0px;
    border-left: 1px solid red;
}
```

As you can see the css selectors targets the element dependending on the dir prop of the parent.

## Related

- [System UI](https://system-ui.com)
- [rtl-css-js](https://github.com/kentcdodds/rtl-css-js)
- [styled-components](https://www.styled-components.com/)

[MIT License](LICENSE.md)
