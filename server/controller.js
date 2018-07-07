module.exports = {

  
    createProduct: ( req, res, next ) => {
      const dbInstance = req.app.set('db');
      const {url, name, price } = req.body;

      dbInstance.createProduct([url,name,price])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oopsiee Daisy! Something went wrong."});
        console.log(err)
      } );
    },
  
    getOneProduct: ( req, res,next) => {
      const dbInstance = req.app.set('db');
      const { params } = req;
  
      dbInstance.getOneProduct( params.id )
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong!"});
          console.log(err)
        } );
    },
  
    getAllProducts: ( req, res, next ) => {
      const dbInstance = req.app.set('db');
  
      dbInstance.getAll()
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong!"});
          console.log(err)
        } );
    },

  
     delete: ( req, res, next ) => {
       const dbInstance = req.app.set('db');
       const { params } = req;
  

       dbInstance.delete_product( params.id )
         .then( () => res.sendStatus(200) )
         .catch( err => {
           res.status(500).send({errorMessage: "Oops! Something went wrong!"});
           console.log(err)
         } );
     }
  };