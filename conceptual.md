### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. Some of its key features include non-blocking I/O, event-driven architecture, and the ability to run JavaScript code outside of a browser environment.


- What is a Promise?
the foundation of asynchronous programming in modern JavaScript. 

- What are the differences between an async function and a regular function?
The difference between a regular function and an async function is, the latter always returns a promise. If you do not return a promise explicitly from an async function, JavaScript automatically wraps the value in a Promise and returns it.
- What is the difference between Node.js and Express.js?

- What is the error-first callback pattern?
The error-first pattern consists of executing a function when the asynchronous operation ends 

- What is middleware?
type of computer software that provides services to software applications beyond those available from the operating system

- What does the `next` function do?
 returns the next item in an iterator. You can add a default return value, to return if the iterable has reached to its end.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
The issues usually considered as part of programming style include the layout of the source code, including indentation; the use of white space around operators and keywords; the capitalization or otherwise of keywords and variable names; the style and spelling of user-defined identifiers, such as function, procedure ...

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
