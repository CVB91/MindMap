---
title: 'Building Airprint : A flight carbon estimator'
date: '2023-02-03'
excerpt: "A blog on on building Airprint."
isFeatured: true
---
## Airprint

Building a full stack web application is a challenging and rewarding process that requires careful planning and execution. In this blog post, we will take a look at the process of building a web application called "Airprint" that allows users to calculate their carbon emissions from the flights they take.

The first step in building any web application is to define the problem you are trying to solve and the features you want to include. In the case of Airprint, the goal is to help users understand the carbon footprint of their air travel and encourage them to make more sustainable choices. The features of the application will include a carbon calculator that takes in flight data and provides an estimate of the carbon emissions produced.

Once the features and requirements have been defined, the next step is to choose the appropriate technology stack. For Airprint, we have chosen to use  Vanilla Javascript, Node Js, Express, and MySql. These technologies are well-suited for building a web application with a back-end server, database, and front-end user interface.

The next step in the process is to design the database schema and set up the database. This involves deciding on the tables, columns, and relationships needed to store user data and flight information. We will be using MySql as our database management system, which provides a robust set of tools for creating and managing databases.

After setting up the database, the next step is to create the server-side code using Node Js and Express. This involves writing the routes and controllers needed to handle user requests and interact with the database. It was decided against to use to implement authentication and authorization to ensure that only authorized users can access the application and their data, but this can certainly be added at a later date

Finally, I created the front-end user interface using HTML, CSS, and Javascript. This will involve designing the layout and user experience of the application, as well as integrating the server-side code with the client-side code.

Throughout the process of building Airprint, there are several challenges that I overcame. These include ensuring the security and reliability of the application, optimizing performance and scalability, and testing and debugging the code to ensure that it functions correctly.

In conclusion, building a full stack web application like Airprint is a complex and challenging process that requires careful planning and execution. By using the appropriate technology stack and following best practices for security, reliability, and performance, we can create a web application that provides value to users and helps promote sustainability.

## 10 challenges I faced when building Airprint

## 1
Determining the appropriate database schema to store user data and flight information
## 2
Setting up and configuring the MySql database management system
## 3
Writing secure and reliable server-side code using Node Js and Express
## 4
Implementing authentication and authorization to protect user data
## 5
Designing a responsive and user-friendly front-end interface using HTML, CSS, and Javascript
## 6
Optimizing the performance and scalability of the application to handle large amounts of traffic and data
## 7
Ensuring that the application is accessible to users with disabilities
## 8
Testing and debugging the code to identify and fix errors and ensure that it functions correctly
## 9
Incorporating user feedback and iterating on the design and functionality of the application
## 10
Staying up-to-date with the latest best practices and technologies for building full stack web applications.

## Calculations: Client or Server?

Making all calculations on the back-end provides several benefits, including better performance, improved security, and easier maintenance. By performing calculations on the server-side, we can ensure that they are consistent and accurate, and reduce the risk of errors or tampering by users on the front-end.

