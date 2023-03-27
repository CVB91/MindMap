---
title: 'Conditional Operators in JS'
date: '2022-12-28'
excerpt: "A quick overview of conditional operators in JS." 
isFeatured: true
---
## What are they used for?

In Javascript, conditional operators are used to execute code based on the truthfulness of a certain condition. These operators can be used to create more complex and sophisticated code that can make decisions based on different factors. There are three conditional operators in Javascript: the ternary operator, the logical OR operator, and the logical AND operator.

The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. Here is an example of how the ternary operator works:

```js
let num = 10;
let result = (num > 5) ? "greater than 5" : "less than or equal to 5";
console.log(result); // Output: "greater than 5"

```

In this example, the condition is num > 5, which evaluates to true. Therefore, the expression greater than 5 is executed, and the value of result is set to greater than 5.

The logical OR operator, represented by ||, evaluates to true if either of its operands is true. If both operands are false, then the expression evaluates to false. Here is an example of how the logical OR operator works:

```js
let num1 = 10;
let num2 = 5;
let result = (num1 > 5) || (num2 > 5);
console.log(result); // Output: true

```
In this example, both num1 and num2 are compared to 5 using the > operator. Since num1 is greater than 5, the expression (num1 > 5) evaluates to true. The same is not true for num2, which is less than 5, so the expression (num2 > 5) evaluates to false. Therefore, the logical OR operator evaluates to true.

The logical AND operator, represented by &&, evaluates to true if both of its operands are true. If either operand is false, then the expression evaluates to false. Here is an example of how the logical AND operator works:

```js

let num1 = 10;
let num2 = 5;
let result = (num1 > 5) && (num2 > 5);
console.log(result); // Output: false


```

In this example, both num1 and num2 are compared to 5 using the > operator. Since num1 is greater than 5, the expression (num1 > 5) evaluates to true. However, num2 is less than 5, so the expression (num2 > 5) evaluates to false. Therefore, the logical AND operator evaluates to false.

In summary, conditional operators in Javascript allow developers to write more concise and efficient code that can make decisions based on different conditions. The ternary operator, logical OR operator, and logical AND operator are three of the most commonly used conditional operators in Javascript, and understanding how they work is essential for writing effective code.