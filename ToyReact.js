class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(vChild) {
    vChild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export const ToyReact = {
  createElement(type, attributes, ...children) {
    let element;
    if(typeof type === 'string') {
      element = new ElementWrapper(type);
    } else {
      element = new type;
    }

    // let element = document.createElement(type);
    for (let name in attributes) {
      element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }
      element.appendChild(child);
    }
    return element;
  },
  render(vdom, root) {
    vdom.mountTo(root);
  },
};
