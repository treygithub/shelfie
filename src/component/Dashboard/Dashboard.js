import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
  constructor(props){
    super(props);

  }
    

  render() {
  const { product,delete1 } = this.props;
  console.log(this.props)
  let mapAndShowStuff  = product.map((e,i) => {
    console.log(e.id)
    return (
      <Product 
        key={i}
        id={e.product_id}
        image_url={e.image_url}
        name={e.name}
        price={e.price}
        delete1={delete1}
        >
     </Product>)})
     return <div className="dashboard">{mapAndShowStuff}</div>;
}
}  

export default Dashboard;