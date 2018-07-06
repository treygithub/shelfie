module.exports = {

  
    createProduct: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, price, imageurl } = req.body;

      dbInstance.create_product([name,price,imageurl])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oopsiee Daisy! Something went wrong."});
        console.log(err)
      } );
    },
  
    getOneProduct: ( req, res,next) => {
      const dbInstance = req.app.get('db');
      const { params } = req;
  
      dbInstance.read_product( params.id )
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong!"});
          console.log(err)
        } );
    },
  
    getAllProducts: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong!"});
          console.log(err)
        } );
    },

  
     delete: ( req, res, next ) => {
       const dbInstance = req.app.get('db');
       const { params } = req;
  

       dbInstance.delete_product( params.id )
         .then( () => res.sendStatus(200) )
         .catch( err => {
           res.status(500).send({errorMessage: "Oops! Something went wrong!"});
           console.log(err)
         } );
     }
  };