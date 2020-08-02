import { ToyReact } from './ToyReact.js';
class MyConponent {
  render() {
    return <div> render something.</div>;
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }
}

// let a = (
//   <div name="a" id="ida">
//     <span>1</span>
//     <span>2</span>
//     <span>4</span>
//   </div>
// );

let a = <MyConponent name="a" id="ida"></MyConponent>

// document.body.appendChild(a);

ToyReact.render(a, document.body);

console.log(a);
