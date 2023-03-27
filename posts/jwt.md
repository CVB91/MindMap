---
title: "How to implement JWT"
date: '2022-10-06'
excerpt: "JSON Web Tokens (JWT) is widely used for authentication and authorization in web applications. Here's how you can implement JWT your application."
isFeatured: true
---
 ## JWT Implementation:

1. Install a JWT library for your programming language/framework.
2. Generate a secret key that will be used to sign and verify the JWTs.
3. Create a function to generate a JWT token with the payload (user data).
4. On successful user authentication, generate a JWT token and send it back to the client as a response.
5. On subsequent requests, the client sends the JWT token in the Authorization header of the request.
6. On the server side, verify the JWT token using the secret key and extract the payload data.

## JWT Implementation

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
  </head>
  <body>
    <h1>Login</h1>
    <form id="login-form">
      <label for="email">Email:</label>
      <input type="email" name="email" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" name="password" required>
      <br>
      <button type="submit">Login</button>
    </form>
    <div id="message"></div>

    <script>
      const loginForm = document.querySelector('#login-form');
      const message = document.querySelector('#message');

      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            message.textContent = data.error;
          } else {
            message.textContent = 'Logged in';
            localStorage.setItem('token', data.token); // Store JWT token in localStorage
            window.location.href = '/protected'; // Redirect to protected route
          }
        })
        .catch(err => console.error(err));
      });
    </script>
  </body>
</html>



```

```js

const jwt = require('jsonwebtoken');
const secret = 'mysecretkey'; // Replace with your own secret key

// Login Route
app.post('/login', (req, res) => {
  // Authenticate user and generate a JWT token
  const { email, password } = req.body;
  const user = authenticateUser(email, password);
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }
  const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
  res.json({ token });
});

// Protected Route
app.get('/protected', verifyToken, (req, res) => {
  // The verifyToken middleware ensures that the JWT token is valid
  res.json({ message: 'Protected resource' });
});

// Middleware function to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}


```




