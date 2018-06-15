# PINC - Conversations that matter

## PINC frontend developer test

Hi there, if you ar solving this challenge, it means you have made headways. Awesome


# Test One

You will be required to write the aswers to the questions below.

Concept of linting
        Linting is the concept of running a written program through another program to detect and correct mistakes and stylistic errors.
 
Understanding of promises and at least an idea of async/await and why they're used over promises
	      Promises allow front-end developers to avoid "callback hell." It allows the programmer to write seemingly synchronous code while still being asynchronous. However, promises can still be syntactically hard to follow. That's why we use async/await as a sort of "syntactical sugar" to better define a promise and when it needs to run synchrounously versus asynchrounously.

Why do we need states in applications? 
        States in applications allow programmers to hold data about the UI on the front-end instead of having to store it in the back-end. For example, a programmer could hold the state of some data consumed from an API without having to store it onto a database.

Why do we need global state management with something like Redux
        First of all, maintaining application state and keeping it consistent with your UI is a challenge. Global state management with Redux is necessary because it allows for scalability and allows for maintainment of the application state to be predictable. 


What is cascading in CSS and what problem does styled components or similar CSS in JS solutions solve
        Cascading is the concept that styles can fall or cascade from one style sheet to another, enabling multiple style sheets to be used on one HTML document. CSS in JS solves the problem of component-styling and allows programmers to "componentize" not only their JS but their CSS as well, this allows the programmer to not have to worry about how to import CSS files into a project because CSS in JS solves that.

What is scoping in JS? 
        Javascript, unlike object-oriented languages like Java, has two scopes: global and local. 

What is lexical scope?
        Variables declared outside of a function are global variables while variables declared inside of a function are set to the lexical scope so that the variable can only be called from within the block of code from which it was defined.

What is the idea of immutability or immutable state
        Immutability is where an object's state cannot be modified after it is created. Examples in native javascript of immutability are numbers and strings. We do this in Redux in order to have a full history of the application's state and to only allow changes to the application's store through actions/reducers instead of direct changes.

## Coding Test

You will be required to convert this UI to frontend app. 

Using: React and Redux.

Page One

![Alt text](https://monosnap.com/image/FgGejxjbjTj21B41Mve76Hg0vyWFU8)

Page Two

On click on the Start a conversation, the input box should disaplay like so

![Alt text](https://monosnap.com/image/4GFVaFHQvMgV2o4DXI7unm7oztgAg2)


Make Request to Our API to build display real questions, emojis, latest answerers

  

Connecting to Questions API

  

Method: GET

Endpoint:  [https://staging-api.pincapp.com/api/questions](https://staging-api.pincapp.com/api/questions)

Create a fork of this repo, update the Repo with your code, then put up a version on heroku.

Happy Coding