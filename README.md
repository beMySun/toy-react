# A Toy React Project

> 亲手打造一个react, 挖掘更多React实现细节。

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
