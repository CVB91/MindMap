---
title: 'A comparison between fetch() and axios()'
date: '2023-01-10'
excerpt: Both fetch() and axios() are JavaScript methods for making HTTP requests, but they have some differences in how they work and their capabilities. 
isFeatured: true
---
Both fetch() and axios() are JavaScript methods for making HTTP requests, but they have some differences in how they work and their capabilities. Here are some of the main similarities and differences:

## Similarities:

**1** Both methods can be used to make GET, POST, PUT, DELETE, and other types of HTTP requests.
**2** Both methods return a Promise that can be used to handle the response.
**3** Both methods allow you to set headers and other request options.

## Differences:

**1** fetch() is a built-in browser method, while axios() is a third-party library that needs to be installed separately.
**2** fetch() returns a Response object that needs to be converted to JSON or another format using methods like .json(), .text(), or .blob(). axios() automatically converts the response to JSON format by default.
**3** fetch() has limited support for request cancellation and error handling, while axios() provides a built-in cancellation API and better error handling.
**4** fetch() does not support sending request data in the form of FormData, while axios() supports FormData, URLSearchParams, and other formats.
**5** fetch() has limited support for interceptors, which allow you to modify requests and responses before they are sent or received. axios() supports interceptors, which can be used for things like adding authentication headers or logging.
**6** fetch() does not work in some older browsers, while axios() works in most modern browsers and has better cross-browser compatibility.

Overall, fetch() is a good choice if you need to make basic HTTP requests and want to avoid adding additional dependencies to your project. axios() is a good choice if you need more advanced features like cancellation, error handling, and interceptors, or if you want better cross-browser compatibility.