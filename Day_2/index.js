<p>
    1) what are the different types of HTTP request ?
    ans:-
    HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource.
<<<<<<< HEAD
    The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE.
    These are equivalent to the CRUD operations (create, read, update, and delete).
    GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.
    POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
    PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload.
=======
    The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete).
    GET:
    GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.
    POST:
    POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
    PUT: 
    A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload.
>>>>>>> e612eb255979b4f872015e2eca020b252a50f946
    If there are no resources that match the request, it will generate one.
    PATCH: 
    PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.
    DELETE:
    A DELETE request is used to delete the data on the server at a specified location.

    2) Explain the concept of middleware in Node.js ?
    ans:-
    Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.
    Middleware gets executed after the server receives the request and before the controller actions send the response.
    Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response.
    An Express-based application is a series of middleware function calls.
    Middleware Chaining: Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order.
    The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware processes the request.
    The next() function in the express is responsible for calling the next middleware function if there is one.
    app.get(path, (req, res, next) => { }, (req, res) => { })

    3) Explain CORS
    ans:-
    CORS : (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need.
    Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.
    // cors - npm i cors
    const cors = require("cors")
    app.use(cors())	
    app.get('/default',defau,(req,res)=>{
        console.log("default")
    })

    4) What is Express.How it helps you to create a backend application
    ans:-
    Express.js: Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features.
<<<<<<< HEAD
    It makes it easier to organize your application’s functionality with middleware and routing.
=======
    It makes it easier to organize your application’s functionality with middleware and routing. 
>>>>>>> e612eb255979b4f872015e2eca020b252a50f946
    It adds helpful utilities to Node.js’s HTTP objects.
    It facilitates the rendering of dynamic HTTP objects.
    *More features than Node.js
    *It is used to build web-apps using approaches and principles of Node.js.
    *Routing is provided.
    *It requires less coding time.
    *Uses middleware for the arrangement of functions systematically server-side.
    *import by const express = require ("express")

    5) Explain min.5 status codes gets used in Backend development
    ans:-
    An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled.
    Status codes specs are set by the W3C. Status codes are embedded in the HTTP header of a page to tell the browser the result of its request.
    *102 PROCESSING Processing 200 OK OK
    *400 BAD_REQUEST Bad Request
    *401 UNAUTHORIZED Unauthorized
    *402 PAYMENT_REQUIRED Payment Required
    *403 FORBIDDEN Forbidden
    *404 NOT_FOUND Not Found
    *500 INTERNAL_SERVER_ERROR Internal Server Error
    *503 - Service Unavailable

    6) Difference Between HTTP and HTTPS
    ans:-
    HTTPS is HTTP with encryption. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses.
    As a result, HTTPS is far more secure than HTTP.
    A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://. Some difference of http and https;

    7) What are JWT tokens ?
    ans:-
<<<<<<< HEAD
    JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
    Again, JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs. when we logged-in somewhere , they provide us a unique token.
    which helps us to access through it token is provided only when the registered data and login data are matching.
    Ex:-facebook
</p>
=======
    JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 
    Again, JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs. 
    when we logged-in somewhere , they provide us a unique token.which helps us to access through it token is provided only when the registered data and login data are matching.
    Ex:-facebook
</p>
>>>>>>> e612eb255979b4f872015e2eca020b252a50f946
