export default class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const shadowRootEl = this.attachShadow({ mode: 'open' });
    shadowRootEl.innerHTML = '<div>Hello World</div>';
  }
}
