describe('Hello-World', () => {
  test('should display hello world text', () => {
    const element = window.document.createElement('hello-world');
    window.document.body.appendChild(element);
    const renderedText = element.shadowRoot.firstChild.textContent;
    expect(renderedText).toBe('Hello World');
  });
});
