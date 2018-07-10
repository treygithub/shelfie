import React from 'react';
    //This is a child component to product.js Update and or edit Button
    const UpdateBTN = (props) =>{
        return(
            <div>
                <input name="image_url" placeholder="Change Picture" onChange={e => props.handleChange(e) } />
                <input name="name" placeholder="Change Name" onChange={e => props.handleChange(e) } />
                <input name="price" placeholder="Change Price" onChange={e => props.handleChange(e) } />
                <button onClick={ () => props.updateProduct(props.id) } >Update</button>
            </div>)
}
export default UpdateBTN;