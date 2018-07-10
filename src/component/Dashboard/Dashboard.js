import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
 
  render() {
  const { product,delete1,updateProduct,handleChange } = this.props;
  let mapAndShowStuff  = product.map((e,i) => {
    return (

      <Product 
        key={i}
        id={e.product_id}
        image_url={e.image_url}
        name={e.name}
        price={e.price}
        delete1={delete1}
        updateProduct={updateProduct}
        handleChange={ handleChange }
        >
        
     </Product>)})
     return <div className="dashboard">{mapAndShowStuff}</div>;
}
}  

export default Dashboard;