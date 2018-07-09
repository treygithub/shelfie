import React from 'react';
    //This is a child component to product.js Update and or edit Button
    const UpdateBTN = (props) =>{
        return(
            <div>
                <input name="price" placeholder="Change Price" onChange={e => props.handleChange(e) } />
                <button onClick={ () => props.updateProduct(props.id) } >Update</button>
            </div>)
}
export default UpdateBTN;