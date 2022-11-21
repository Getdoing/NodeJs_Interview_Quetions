// Que-1.How do you create a simple Express.js application?

// const express = require('express');
// const app = express();
// const port = 4700  || process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send(`<h1>It is my Second Node.js Assignment</h1>`)
//     res.end()
// }

// app.listen(port,()=>{
//     console.log(`Connected to the port ${port}`);
// })


Que - 2.Implementation of all type of exports in backend application.
    Ans-- > The module.exports is a special object which is included in every JavaScript file in the Node.js application by default.

We have to create function.js file-- Here export the file
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
module.exports = { add }

we have import the file in main.js-- - here i am importing

const f = require('./function');
const result = f.add(10, 5);

console.log('The result is:', result);



Que - 3.Create a middleware which will be applicable to all the routes.Create
Ans-- >
    // const express = require('express')
    // const app = express()
    // const port = 5000;

    // const middleware1 = ((req,res,next)=>{
    //      console.log('I am Global middleware');
    //      next();
    // })

    // app.use(middleware1);

    // app.get('/',(req,res)=>{
    //      console.log('I am in middleware1');
    //      res.end();
    // })

    // app.listen(port , ()=>{
    //      console.log(`Connected to port ${port}`);
    // })


    Que - 4.Implement CORS.
        Ans-- >

// Installation: npm install cors

// const express = require('express')
// const cors = require('cors')
// const app = express()

// app.get('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a Single Route'})
// })

// app.listen(8080, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })