import React, {Component} from 'react'
import styles from './CheckoutSuccess.module.css'


class CheckoutSuccess extends Component{


    componentDidMount(){
        const {cart, history, total, clearCart} = this.props
        let cartIncludesBike = Object.keys(cart).some(key => {
            if(typeof cart[key] !== 'object') return false
            return cart[key].product_type === 'bike'
        })
        if(!cartIncludesBike || total === 0) return history.push('/cart')
        clearCart()
    }


    render(){

     

        return (
            <div>
                <h1 className={styles.checkout_success_message}>Thank you for choosing RentABike</h1>
            </div>
        )
    }
}

export default CheckoutSuccess