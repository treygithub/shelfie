import React, {Component} from 'react';
import axios from "axios";
import Dashboard from '../Dashboard/Dashboard';


class Form extends Component {
  constructor(props){
    super(props);

    this.state={
      product: [],
      name:'',
      price:0,
      image_url:''
    }

    this.handleUrl=this.handleUrl.bind(this);
    this.handleName=this.handleName.bind(this);
    this.handlePrice=this.handlePrice.bind(this);
    this.postNewProduct=this.postNewProduct.bind(this);
    this.handleDeleteProduct=this.handleDeleteProduct.bind(this);
    this.getProducts=this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  };


  getProducts(){
    axios.get('/api/products').then(res => {
      this.setState({
        product: res.data
      })
      console.log(res);
    })
  }


  handleDeleteProduct(id) {
    // this.props.delete([this.props.index])
    console.log(id)
    axios
      .delete(`/api/delete/${id}`)
      .then(() => this.getProducts())
  }

  
  handleUrl(val) {
    this.setState({
      image_url: val
    });
  }

  handleName(val) {
    this.setState({
      name: val
    });
  }

  handlePrice(val) {
    this.setState({
      price: val
    });
  }
  
  handleCancel() {
    this.setState({
      name: "",
      price: 0,
      image_url: ""
    });
  }


  postNewProduct = () => {
    let {name,price,image_url} = this.state
    axios.post("/api/AddPost", {name,price,image_url} ).then(res => {

      this.getProducts();
      console.log(res)
    })
  }

render() {
  const { name, price, image_url, product } = this.state;

  return (
    <div>
        <form>
          <h3>Image URL:</h3>
          <input name="image_url"placeholder="Add URL" onChange={e => this.handleUrl(e.target.value)} />
          <h3>Product Name:</h3>
          <input name="name" placeholder="Create Product Name" onChange={e => this.handleName(e.target.value)} />
          <h3>Price:</h3>
          <input name="price" placeholder="Create Price" onChange={e => this.handlePrice(e.target.value)} />
          <div className="buttons">
            <button onClick={() => this.HandleCancel()}>Cancel</button>
            <button onClick={() => this.postNewProduct()}>Add to Inventory</button>
          </div>
        </form>
        <hr />
        <Dashboard
      product={product}
      delete1={this.handleDeleteProduct}
      />
    </div>
    );

  }
}

export default Form;