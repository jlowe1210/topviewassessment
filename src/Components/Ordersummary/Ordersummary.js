import React from 'react';
import styles from './Ordersummary.module.css'


const Ordersummary = ({total, validateCart}) =>{
    
    return (
        <div className={styles.container}>
            <div className={styles.container_body}>
                <h1 style={{marginBottom: '25px'}}>Summary</h1>
                <p style={{margin: '10px 0'}}>Merchandise: ${`${parseFloat(total).toFixed(2)}`}</p>
                <p style={{padding: '10px 0', borderBottom: '1px solid'}}>Taxes: $0.00</p>
                <p style={{marginTop: '20px'}}>Sub Total: ${`${parseFloat(total).toFixed(2)}`}</p>
                <button onClick={validateCart} className={styles.checkout_btn}>Checkout</button>
            </div>
        </div>
    )
}

export default Ordersummary;