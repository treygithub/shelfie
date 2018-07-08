import React from 'react';
    //This is a child component to product.js Update or edit Button
    const UpdateBTN = (props) =>{
        return(
            <div>
                <button onClick={() => props.handleUpdate(props.id)} >Update</button>
            </div>)
}
export default UpdateBTN;