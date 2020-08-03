import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return (
      <div> 
        <div>This is awsome ! </div>
        <div>
          {this.children}
        </div>
      </div>
    );
  }
}

const element = <MyComponent name="kk"> test </MyComponent>;

ToyReact.render(element, document.getElementById('root'));
