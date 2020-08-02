# A Toy React Project

```js
import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return <div> This is awsome ! </div>;
  }
}

const App = <MyComponent name="kk" />;

ToyReact.render(App, document.getElementById('root')); // 😍😍😍
```
