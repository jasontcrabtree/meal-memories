/* DEV DEPENDENCIES */
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/* COMPONENT DEPENDENCIES */
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const nonExistentRoute = require('./routes/404');

/* ASSIGN EXPRESS TO APP */
const app = express();

/* IMPORT Queries and Assign to qr for brevity */
const qr = require('./api/queries');

/* EXPRESS CONFIG */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*
Routes go here
||--------------------------------------------||
*/

// Starter route
app.use('/', indexRouter);

/* Call CRUD routes */
app.get('/users', qr.getAllUsers);
app.get('/users/:id', qr.getUserById);

/* CATCH ALL ERROR ROUTE */

app.use(['*', '*/*', '*/*/*', '*/'], nonExistentRoute);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.message);

  // Define a common server error status code if none is part of the err.
  // eslint-disable-next-line no-param-reassign
  if (!err.statusCode) err.statusCode = 500;

  if (err.shouldRedirect) {
    // Gets a customErrorPage.html.
    res.render(nonExistentRoute);
  } else {
    // Gets the original err data, If shouldRedirect is not declared in the error.
    res.status(err.statusCode).send(err.message);
  }
});
/*
End of file
||--------------------------------------------||
*/
module.exports = app;
