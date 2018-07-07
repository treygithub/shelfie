import React, {Component} from 'react';
import axios from "axios";


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
    axios.post("/api/AddPost",{product: {name,price,image_url}} ).then(res => {
      this.setState({
        product: res.data
      })
    })
  }



render() {
  const { name,price,image_url } = this.state

  let mapAndShowStuff  = this.state.product.map((e,i) => {
    return (
      <div key={i}>
        <h2>Image Url: {e.image_url}</h2>
        <h4>Product Name: {e.name}</h4>
        <h4>Price: {e.price}</h4>
     </div>
    )
  })

  return (
    <div>
      <form>
      <div>{mapAndShowStuff}</div>
        <input className="product-name" placeholder="Create Product Name" type="text" name="name" onChange={e => this.handleName(e.target.value)}/>
        <input className="price" placeholder="Create Price" type="text" name="price" onChange={e => this.handlePrice(e.target.value)}/>
        <input className="url" placeholder="Add URL" type="text" name="image_url" onChange={e => this.handleUrl(e.target.value)}/>
        <button  className="cancel-btn" onClick={()=> this.HandleCancel()}>Cancel</button>
      
        <button className="create-btn" onClick={() => this.postNewProduct(name,price,image_url)}>Add to Inventory</button>
      </form>
    </div>
    );

  }
}

export default Form;