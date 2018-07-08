import React from 'react';
    
    const Product = (props) =>{
        return(
            <div>
                <img src={props.image_url} alt="new product"></img>
                <h4>Product Name: {props.name}</h4>
                <h4>Product Price: {props.price}</h4>
                <button>Delete</button>
                <button>Update</button>
                <hr />
            </div>)
}
export default Product;