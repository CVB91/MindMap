---
title: "Error Codes in JavaScript"
date: '2022-09-29'
image: 
excerpt: Info about some common error codes that you may encounter when working with JavaScript.
isFeatured: true
---
## Syntax Error

This error occurs when the JavaScript engine encounters a syntax error in your code. This can happen if you have a typo or mistake in your syntax. For example:

```js
// Syntax error - missing closing parenthesis
const sum = (a, b => {
  return a + b;
});

```
## Type Error

This error occurs when you try to perform an operation on a value that is not of the expected type. This can happen if you pass an incorrect argument to a function or try to access a property on an undefined or null value. For example:

```js
// TypeError - property does not exist on undefined value
const person = undefined;
console.log(person.name);


```

## Reference Error

This error occurs when you try to reference a variable or function that does not exist in the current scope. This can happen if you misspell a variable or function name or try to reference a variable or function that is out of scope. For example:

```js
// ReferenceError - variable is not defined
console.log(age);
```

## Range Error

This error occurs when you try to perform an operation that is outside the range of acceptable values. This can happen if you try to create an array with a negative length or call a function with too many arguments. For example:

```js
// RangeError - invalid array length
const arr = new Array(-1);

```
## NetworkError

This error occurs when there is an issue with the network connection or HTTP request. This can happen if you try to make a request to a server that is down or if there is a problem with your network connection. For example:

```js
// NetworkError - could not connect to server
fetch('https://example.com/api/data')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

These are just a few examples of common error codes you may encounter when working with JavaScript. It's important to pay attention to error messages and use debugging tools to help identify and resolve any issues in your code.


