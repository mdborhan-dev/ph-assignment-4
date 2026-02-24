## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById** - returns a single element by the name of the id
- **getElementsByClassName** - returns all the element with the same class name
- **querySelector** - returns first element of matching css selector
- **querySelectorAll** - returns nodeList of all elements with matching css selector

---

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element in DOM:

1. create the element with `document.createElement('name of the element you want to create')`
2. give the content to the element with `innerText` or `innerHTML`
3. append to the parent with `parentElement.appendChild('created element')`

---

### 3. What is Event Bubbling? And how does it work?

Event bubbling is a DOM event propagation where when an event happens on a child element it triggers the handler on it's parent and it goes up to the root of the document

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript is a design pattern where there's only one event listener which is the parent.

It's useful for improving performance. since there's only one event listener it reduces memory overhead and improves page responsiveness

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

`stopPropagation()` method prevents the event from bubbling up the DOM tree  
where `preventDefault()` methods stops default browser of an event from happening. like if prevent method set on a link. clicking the link won't navigate to the link
