import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return <div> This is awsome ! </div>;
  }
}

const element = <MyComponent name="kk" />;

ToyReact.render(element, document.getElementById('root'));
