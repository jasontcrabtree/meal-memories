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
app.use('*', nonExistentRoute);

/*
End of file
||--------------------------------------------||
*/
module.exports = app;
