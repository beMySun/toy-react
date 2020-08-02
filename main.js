import { ToyReact, Component } from './ToyReact.js';

class MyConponent extends Component {
  render() {
    return <div> render something.</div>;
  }
}

let element = <MyConponent name="a" id="ida"></MyConponent>;

ToyReact.render(element, document.body);
