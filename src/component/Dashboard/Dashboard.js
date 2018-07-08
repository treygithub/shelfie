import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {

  render() {
  const { product } = this.props;
  let mapAndShowStuff  = product.map((e,i) => {
    return (
      <Product 
        key={i}
        id={e.id}
        image_url={e.image_url}
        name={e.name}
        price={e.price}
        >
     </Product>)})
     return <div className="dashboard">{mapAndShowStuff}</div>;
}
}  

export default Dashboard;