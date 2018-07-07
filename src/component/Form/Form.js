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
    // this.handleInputChange=this.handleInputChange.bind(this);
  }

  componentDidMount(){
    axios.get('/api/products').then(res => {
      this.setState({
        product: res.data
      })
      console.log(res)
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

  // handleInputChange(e){
  //   this.setState({[e.target.name]: e.target.value})
  // }

  
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
      this.setState({
        product: res.data
      })
      console.log(res)
    })
  }



render() {
  const { name, price, image_url } = this.state;

  let mapAndShowStuff  = this.state.product.map((e,i) => {
    return (
      <div key={i}>
        <h2>Image Url: {e.image_url}</h2>
        <h4>Product Name: {e.name}</h4>
        <h4>Price: {e.price}</h4>
        <hr />
     </div>
    )
  })

  return (
    <div>
         <div>{mapAndShowStuff}</div>
        <h3>Image URL:</h3>
        <input onChange={e => this.handleUrl(e.target.value)} />
        <h3>Product Name:</h3>
        <input onChange={e => this.handleName(e.target.value)} />
        <h3>Price:</h3>
        <input onChange={e => this.handlePrice(e.target.value)} />
        <div className="alignBtns">
          <button onClick={() => this.HandleCancel()}>Cancel</button>
          <button onClick={() => this.postNewProduct(name,price,image_url)}>
            Add to Inventory
          </button>
        </div>
      {/* <form>
      <div>{mapAndShowStuff}</div>
        <input className="product-name" placeholder="Create Product Name" type="text" name="name" onChange={e => this.handleInputChange(e)}/>
        <input className="price" placeholder="Create Price" type="text" name="price" onChange={e => this.handleInputChange(e)}/>
        <input className="url" placeholder="Add URL" type="text" name="image_url" onChange={e => this.handleInputChange(e)}/>
        <button  className="cancel-btn" onClick={()=> this.HandleCancel()}>Cancel</button>
        <button className="create-btn" onClick={(e) => this.postNewProduct(e, this.state.update)}>Add to Inventory</button>
      </form> */}
    </div>
    );

  }
}

export default Form;