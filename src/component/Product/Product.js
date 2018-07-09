import React from 'react';
import DeleteBTN from './DeleteBTN';
import UpdateBTN from './UpdateBTN';
import './product.css'

     
    const Product = (props) =>{

        
        return(
            <div>

                <img className="img-tag" src={props.image_url} alt="new product"></img>
                <h4>Product Name: {props.name}</h4>
                <h4>Product Price: {props.price}</h4>
                <DeleteBTN
                delete1={props.delete1}
                id={props.id}
                />
                <UpdateBTN
                updateProduct={props.updateProduct}
                handleChange={props.handleChange}
                id={props.id}
                />
                <hr />
            </div>)
        }
export default Product;