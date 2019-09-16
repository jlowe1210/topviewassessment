import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './Components/LandingPage/LandingPage';
import ProductsList from './Containers/ProductsList/ProductsList';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import CheckoutSuccess from './Components/CheckoutSuccess/CheckoutSuccess';


import './App.css';

class App extends Component {

  state = {
    cart: {
      totalPrice: 0
    },
    products: []
  }



  componentDidMount(){
    fetch('/bikerentals.json').then(data => data.json())
    .then(({products}) =>{
      this.setState({
        products
      })
    })
  }

  addItemToCart = (ProductId) =>{
    const {products, cart} = this.state;
    const {id, name, image, price, product_type} = products.find(product => product.id === ProductId)
    const updatedCart = {...cart, totalPrice: cart.totalPrice += price}
    if(!updatedCart[ProductId]){
      updatedCart[ProductId] = {id, name, image, price, product_type, qty: 1, total: price}
    }else{
      updatedCart[ProductId] = {...updatedCart[ProductId], qty: ++updatedCart[ProductId].qty, total: updatedCart[ProductId].total += price}
    }
    this.setState({cart: updatedCart})
  }

  removeItemFromCart = (ProductId) =>{
    const updatedCart = {...this.state.cart, totalPrice: this.state.cart.totalPrice - this.state.cart[ProductId].total}
    delete updatedCart[ProductId]
    this.setState({cart: updatedCart})
  }

  subtractItemFromCart = (ProductId) =>{
    const {products, cart} = this.state;
    const {price} = products.find(product => product.id === ProductId)
    const updatedCart = {...cart, totalPrice: cart.totalPrice -= price}
    if(updatedCart[ProductId].qty === 1) return
    updatedCart[ProductId] = {...updatedCart[ProductId], qty: --updatedCart[ProductId].qty, total: updatedCart[ProductId].total -= price}
    this.setState({cart: updatedCart})
  }
  


  getTotalQuantity(cart){
    let cartItem = Object.keys(cart)
    if(cartItem.length === 1 && cartItem[0] === 'totalPrice') return 0
    let me = cartItem.reduce((pre, cur) =>{
      if(cur === 'totalPrice') return pre += 0
      return pre += cart[cur].qty
    }, 0)
    return me
  }


  clearCart = () =>{
    this.setState({
      cart: {totalPrice: 0}
    })
  }



  render(){
    const {products, cart} = this.state
    const totalQuantity = this.getTotalQuantity(cart)
    return (
        <>
          <BrowserRouter>
          <Navigation totalQuantity={totalQuantity} />
            <Switch>
              <Route path='/' exact render={() =>{
                return (
                  <>
                    <LandingPage />
                    <ProductsList addItem = {this.addItemToCart} products={products} />
                  </>
                )
              }} />
              <Route path ='/cart' render={(props) => <Cart {...props} totalQuantity={totalQuantity} subtractItem={this.subtractItemFromCart} removeItem={this.removeItemFromCart} addItem={this.addItemToCart} cart={cart}/>} />
              <Route path = '/checkout' render = {(props) => <Checkout total={cart.totalPrice} {...props} />} />
              <Route path = '/checkoutsuccess' render={(props) => <CheckoutSuccess clearCart={this.clearCart} cart={cart} {...props} total={cart.totalPrice} />}/>
              <Redirect to='/' />
            </Switch>
          </BrowserRouter>
        </>
    )
  }
  
}

export default App;
