const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection'); 


//settings 

app.set('port',process.env.PORT || 3000); // configuracion de puerto
app.set('view engine','ejs');              // configuracion de motor de plantillas para las vistas
app.set('views',path.join(__dirname, 'views'));


//middlewares 
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:"localhost",
    user:"wwantelo",
    password:"wwantelo",
    port:3306, 
    database:"projectSion",

}, 'single'));
 



app.listen(app.get('port'),() => {
    console.log('server on port 3000');

});