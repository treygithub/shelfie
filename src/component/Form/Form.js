import React, {Component} from 'react';
import axios from "axios";


class Form extends Component {
  constructor(props){
    super(props);

    this.state={
      product: [],
      url:"",
      name:"",
      price:0,
    }

    this.handleUrl=this.handleUrl.bind(this);
    this.handleName=this.handleName.bind(this);
    this.handlePrice=this.handlePrice.bind(this);
    this.postNewProduct=this.postNewProduct.bind(this);
  }

  componentDidMount(){
    axios.get('/api/products').then(res => {
      this.setState({
        product: res.data
      })
    })
  };

  
  handleUrl(val) {
    this.setState({
      img: val
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
      img: ""
    });
  }


  postNewProduct = () => {
    let {url, name, price} = this.state
    axios.post("/api/AddPost",{product: {url, name, price}} ).then(res => {
      this.setState({
        product: res.data
      })
    })
  }



render() {
  const { url, name, price } = this.state;

  let mapAndShowStuff  = this.state.product.map((e,i) => {
    return (
      <div key={i}>
        <h4>id={e.id}</h4>
        <h2>Image Url: {e.url}</h2>
        <h4>Product Name: {e.name}</h4>
        <h4>Price: {e.price}</h4>
     </div>
    )
  })

  return (
    <div>
      <form>
      <div>{mapAndShowStuff}</div>
        <input className="url" placeholder="Add URL" type="text" name="url" onChange={e => this.handleUrl(e)}/>
        <input className="product-name" placeholder="Create Product Name" type="text" name="name" onChange={e => this.handleName(e)}/>
        <input className="price" placeholder="Create Price" type="text" name="price" onChange={e => this.handlePrice(e)}/>
        <button  className="cancel-btn" onClick={()=> this.HandleCancel()}>Cancel</button>
      
        <button className="create-btn" onClick={() => this.postNewProduct(url,name,price)}>Add to Inventory</button>
      </form>
    </div>
    );

  }
}

export default Form;