import style from './todo-app.style.scss';

const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(style));

export default class ToDoApp extends HTMLElement {
  connectedCallback() {
    const divElement = document.createElement('div');
    divElement.className = 'todo-design';
    divElement.innerText = 'Todo App';
    this.appendChild(divElement);
    this.appendChild(styleElement);
  }
}
