---
title: 'What is "Nullish Coalescing"?'
date: '2022-12-16'
excerpt: "An explantion of what "Nullish Coalescing" is in JS." 
isFeatured: true
---
## Nullish what?

Nullish Coalescing is a new feature introduced in ECMAScript 2020 (ES2020) for JavaScript programming language. It provides a concise way to handle default values for nullish (null or undefined) values.

The nullish coalescing operator (??) is used to check whether a variable is null or undefined. If it is null or undefined, then the operator returns the right-hand side value, otherwise, it returns the left-hand side value.

For example, consider the following code:

```js
const foo = null;
const bar = foo ?? 'default value';
console.log(bar); // output: 'default value'
```

In this example, the ?? operator is used to check if the variable foo is null or undefined. Since foo is null, the operator returns the default value 'default value' and assigns it to the variable bar.

Nullish coalescing operator is particularly useful in scenarios where you want to provide a default value for variables that might be null or undefined.

Consider another example:

```js
const user = {
  name: 'John',
  age: null
};

console.log(user.age ?? 18); // output: 18
```
In this example, the ?? operator is used to check if the age property of the user object is null or undefined. Since it is null, the operator returns the default value 18.

One important thing to note is that the nullish coalescing operator only returns the right-hand side value if the left-hand side value is null or undefined. If the left-hand side value is any other falsy value such as false, 0, '', etc., then the operator returns the left-hand side value.

```js

console.log(false ?? true); // output: false
console.log(0 ?? 42); // output: 0
console.log('' ?? 'default'); // output: ''

```

In conclusion, the nullish coalescing operator (??) provides a concise way to handle default values for nullish values in JavaScript. It helps developers write cleaner and more readable code, and makes it easier to handle edge cases where a variable might be null or undefined.



