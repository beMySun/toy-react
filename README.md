# toy-react

A Toy React

```js
import { ToyReact, Component } from './ToyReact.js';

class MyComponent extends Component {
  render() {
    return <div> render something.</div>;
  }
}

const element = <MyComponent name="kk" id="id"></MyComponent>;

ToyReact.render(element, document.body);

```
