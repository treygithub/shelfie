import React from 'react';
    //This is a child component to product.js Delete Button
    const DeleteBTN = (props) =>{
        return(
            <div>
                <button onClick={() => props.handleDeleteProduct(props.id)}>Delete</button>
            </div>)
}
export default DeleteBTN;