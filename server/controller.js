module.exports = {

  
  postNewProduct: ( req, res ) => {
      const dbInstance = req.app.set('db');
      const {name, price,image_url } = req.body;

      dbInstance.createProduct([name,price,image_url])
      .then( product => {
        res.status(200).json(product);})
      
         },
  
    // getOneProduct: ( req, res,next) => {
    //   const dbInstance = req.app.set('db');
    //   const { params } = req;
  
    //   dbInstance.getOneProduct( params.id )
    //     .then( product => res.status(200).send( product ) )
    //     .catch( err => {
    //       res.status(500).send({errorMessage: "Oops! Something went wrong!"});
    //       console.log(err)
    //     } );
    // },
  
    getAllProducts: ( req, res, next ) => {
      const dbInstance = req.app.set('db');
  
      dbInstance.getAll()
        .then( product => res.status(200).json( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong!"});
          console.log(err)
        } );
    },

  
    //  delete: ( req, res, next ) => {
    //    const dbInstance = req.app.set('db');
    //    const { params } = req;
  

    //    dbInstance.delete_product( params.id )
    //      .then( () => res.sendStatus(200) )
    //      .catch( err => {
    //        res.status(500).send({errorMessage: "Oops! Something went wrong!"});
    //        console.log(err)
    //      } );
    //  }
  };