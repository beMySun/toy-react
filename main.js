import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return <div> This is awosome ! </div>;
  }
}

const element = <MyComponent name="kk" id="id" />;

ToyReact.render(element, document.body);
