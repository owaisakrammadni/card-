import { useState } from 'react';
import './App.css';

function App() {

  const [products, setproducts] = useState([
    {
      title: " Mix sweet",
      price: "100",
      description: "",
      image: ""
    },
    {
      title: "cake",
      price: "200",
      description: "description ",
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      title: "Laddo",
      price: "300",
      description: "description 03",
      image: "https://content3.jdmagicbox.com/comp/def_content/sweet_shops/default-sweet-shops-6.jpg?clr=525c0a"
    },
  ])

  const [cart, setcart] = useState([]);
  function addtocart(product) {


     var result =cart.find((cart)=>cart.id === product.id);

     if(result === undefined){
       setcart([...cart,product])
     }else{
       alert("Order Already Exsist")
     }}


     return (<>
      <div className="App">
        <div>
          {products.map((product, index) => (
            
            <div key={index} >
              {console.log("index",index),console.log("product",product)}
              <img src={product.img} width="250px" />
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <button onClick={() => addtocart(product)}>Add to cart</button>
              &ensp;
            </div>
          ))}
        </div>
  
        <div>
          {cart.map((value, index) => (
            <div key={index}>
              <h1>Add To Cart</h1>
              <img src={value.img} width="250px" />
              <p>Title: {value.title}</p>
              <p>Price: {value.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>);
  
  }
    

export default App;