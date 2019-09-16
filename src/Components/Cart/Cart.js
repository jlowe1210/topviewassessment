import React, {Component} from 'react';
import CartItemList from '../../Containers/CartItemList/CartItemList';
import OrderSummary from '../Ordersummary/Ordersummary';
import styles from './Cart.module.css';




class Cart extends Component{

    state = {
        error: false,
        timeout: null
    }

    validateCart = () =>{        
        const {cart} = this.props
        
         let cartIncludesBike = Object.keys(cart).some(key => {
            if(typeof cart[key] !== 'object') return false
            return cart[key].product_type === 'bike'
        })
        if(!cartIncludesBike){
            this.setState({error: true}, ()=>{
               clearInterval(this.state.timeout)
               let timeoutPointer = setTimeout(() => {
                    this.setState({error: false})
                }, 2000);
                this.setState({timeout: timeoutPointer})
            })
        }else{
            return this.props.history.push('/checkout')
        }
    }


    render(){
        
        const {cart, addItem, removeItem, subtractItem, totalQuantity} = this.props
        const {error} = this.state
        if(Object.keys(cart).length <= 1)  return <h1 className={styles.empty_cart_text}>Cart is empty</h1>
        return (
            <>
                {error && <p className={styles.error_message}>Please include a bike in your cart</p>}
                <div className={styles.container}>
                    <CartItemList totalQuantity={totalQuantity} subtractItem={subtractItem} removeItem={removeItem} addItem={addItem} cart={cart} />
                    <OrderSummary validateCart={this.validateCart} total={cart.totalPrice} />
                </div>
            </>
        )
    }
    
}

export default Cart;