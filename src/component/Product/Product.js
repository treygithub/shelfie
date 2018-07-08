import React from 'react';
import DeleteBTN from './DeleteBTN';
import UpdateBTN from './UpdateBTN';

     
    const Product = (props) =>{
        
        return(
            <div>
                <img src={props.image_url} alt="new product"></img>
                <h4>Product Name: {props.name}</h4>
                <h4>Product Price: {props.price}</h4>
                <DeleteBTN
                delete1={props.delete1}
                id={props.id}
                />
                <UpdateBTN/>
                <hr />
            </div>)
        }
export default Product;