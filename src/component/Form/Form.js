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

    this.postNewProduct=this.postNewProduct.bind(this);
    this.handleDeleteProduct=this.handleDeleteProduct.bind(this);
    this.getProducts=this.getProducts.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.updateProduct=this.updateProduct.bind(this)
  }

  componentDidMount(){
    this.getProducts();
  };


  getProducts(){
    axios.get('/api/products').then(res => {
      this.setState({
        product: res.data
      })
      //console.log(res);
    })
  }


  handleDeleteProduct(id) {
    axios
      .delete(`/api/delete/${id}`)
      .then(() => this.getProducts())
  }

  updateProduct(id) {
    // console.log(this.state)
    let {name,price,image_url}=this.state
    axios
      .put(`/api/productUpdate/${id}`, {name,price,image_url })
      .then(() =>  this.getProducts())
    }

  handleChange(e) {
    //console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  postNewProduct = () => {
    let {name,price,image_url} = this.state
    axios.post("/api/AddPost", {name,price,image_url} ).then( res => {
      this.getProducts();
      
    })
  }

render() {

  const { product } = this.state;
  //console.log(this.state)
  return (
    <div>
        <form>
          <h3>Image URL:</h3>
          <input name="image_url"placeholder="Add URL" onChange={e => this.handleChange(e)} />
          <h3>Product Name:</h3>
          <input name="name" placeholder="Create Product Name" onChange={e => this.handleChange(e)} />
          <h3>Price:</h3>
          <input name="price" placeholder="Create Price" onChange={e => this.handleChange(e)} />
          <div className="buttons">
            <button onClick={() => this.HandleCancel()}>Cancel</button>
            <button onClick={() => this.postNewProduct()}>Add to Inventory</button>
          </div>
        </form>
        <hr />
        <Dashboard
      product={product}
      delete1={this.handleDeleteProduct}
      updateProduct={this.updateProduct}
      handleChange={this.handleChange}
      />
    </div>
    );

  }
}

export default Form;