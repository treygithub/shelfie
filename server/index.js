require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./controller');
const cors=require('cors')

app.use(bodyParser.json());
app.use(cors())

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
} ).catch(err => console.log(err));


app.post( '/api/AddPost', controller.postNewProduct );
app.get( '/api/products', controller.getAllProducts );
// app.get( '/api/product/:id', controller.getOneProduct );
 app.put( '/api/productUpdate/:id', controller.updateProduct );
app.delete( '/api/delete/:id',controller.handleDelete );

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`);});