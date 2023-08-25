const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//next is the function that will be passed to the arrow function which will use to go to the next middleware
/*app.use('/add-product', (req, res, next) => {
  console.log('.....in the middleware');
  res.send('<h1>Add Prduct Page</h1>');
  //after adding the next() the second middleware will be executed.
  // next(); //this next() allows request to continue to the next middleware in line
  // if we dont want to go to the next middleware or function or we have something else to do then we will simply send the response
});

//this is second middleware, but it will not be executed until we are adding the next() in the previous middleware
app.use('/', (req, res, next) => {
  console.log('.....in the another middleware');
  res.send('<h1>Hello From express</h1>');
}); */

//Handling Input REequests
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//handling the 404 error in case middleware for the specific routes are not found
app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

/**
 * Limiting Middleware Execution to POST Requests, what we can do?
 * if we want to respond to only get or post or put request in specific middleware
 * we can handle it by just changing app.use ==> app.post/app.put/app.get
 

app.use('/product', (req, res, next) => {
  console.log(req.body); //we see the output of req.body is undefined this is because of by default request cannot parse the body of incoming request. so to do that we need to register a parser by adding another middleware before our route handling middleware. to do this we need to install 3rd party package called as body-parcer, and as it a package that our code needs we will install by --save
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello From express</h1>');
});
*/

app.listen(3000);
