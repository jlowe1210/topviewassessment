import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styles from './Checkout.module.css'


class Checkout extends Component{


    state = {
        email: '',
        phone: '',
        fname: '',
        lname: '',
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.history.push('/checkoutsuccess')
    }
    formatCardNumber(number){
        let numberArray = number.split('');
        if(numberArray.length > 16) numberArray = numberArray.slice(0,16)
        let formatedNum = ''
        for(let i = 0; i < numberArray.length; i+=4){
           formatedNum = formatedNum + numberArray.slice(i, i + 4).join("") + " "
        }
        
        return formatedNum
    }


    render(){
        const {email, phone, fname, lname} = this.state
        const {total} = this.props


        if(!total) return <Redirect to='/' />

        return (
            <div>
                <div className={styles.checkout_container}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles.user_info}>
                            <h2>Your Info</h2>
                            <input className={styles.user_info_input} type='text' onChange={this.handleChange} value={email}  required name='email' placeholder='Email' />
                            <input className={styles.user_info_input} type='tel'  onChange={this.handleChange} value ={phone} required name='phone' placeholder='Phone'/>
                            <input className={styles.user_info_input} type='text' onChange={this.handleChange} value={fname}  required name='fname' placeholder='First Name'/>
                            <input className={styles.user_info_input} type='text' onChange={this.handleChange} value={lname}  required name='lname' placeholder='Last Name'/>
                        </div>
                        <div className={styles.user_info}>
                            <h2>Payment Info</h2>
                            <input className={styles.user_info_input} disabled value={this.formatCardNumber('1111222233334444')} type='text' required name='cardNumber' placeholder='4242 4242 4242 4242' />
                            <input className={styles.user_info_input} disabled type='text' value={'123'} required name='cvc' placeholder='CVC' />
                            <input className={styles.user_info_input} disabled type='text' value={'02/99'} required name='expiryDate' placeholder='MM / YY' />
                        </div>
                        <p style={{fontSize: '20px', paddingLeft: '20px'}}>Total: ${`${parseFloat(total).toFixed(2)}`}</p>
                        <button type='submit' className={styles.place_order_btn}>Place Order</button>
                    </form>  
                </div>
            </div>
        )
    }
}


export default Checkout;