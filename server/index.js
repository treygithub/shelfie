require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./controller');

app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
} ).catch(err => console.log(err));


app.post( '/api/AddPost', controller.postNewProduct );
app.get( '/api/products', controller.getAllProducts );
//app.get( '/api/product/:id', controller.getOneProduct );
// app.put( '/api/product/:id', products_controller.update );
//app.delete( '/api/delete/:id',controller.handleDelete );

const port = process.env.PORT || 8000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`);});