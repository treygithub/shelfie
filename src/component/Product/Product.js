import React from 'react';
import DeleteBTN from './DeleteBTN';
import UpdateBTN from './UpdateBTN';

     
    const Product = (props) =>{
        
        //const { handelDelete,handelUpdate } = this.props;
        return(
            <div>
                <img src={props.image_url} alt="new product"></img>
                <h4>Product Name: {props.name}</h4>
                <h4>Product Price: {props.price}</h4>
                <DeleteBTN/>
                <UpdateBTN/>
                <hr />
            </div>)

        }
export default Product;