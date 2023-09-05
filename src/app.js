const express = require('express');
const app = express();

//settings 

app.set('port',process.env.PORT || 3000); // configuracion de puerto
app.set('view engine','ejs')              // configuracion de motor de plantillas para las vistas




app.listen(app.get('port'),() => {
    console.log('server on port 3000');

});