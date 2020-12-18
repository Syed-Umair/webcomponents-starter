describe('ToDo-App', () => {
  test('should display Todo App text', () => {
    const element = window.document.createElement('todo-app');
    window.document.body.appendChild(element);
    const renderedText = element.children[0].innerText;
    expect(renderedText).toBe('Todo App');
  });
});
