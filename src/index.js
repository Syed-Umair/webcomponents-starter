import HelloWorld from './components/hello-world/hello-world';
import ToDoApp from './components/todo-app/todo-app';

customElements.define('hello-world', HelloWorld);
customElements.define('todo-app', ToDoApp);

export { HelloWorld, ToDoApp };
