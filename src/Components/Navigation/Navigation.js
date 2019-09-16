import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';


const Navigation = ({totalQuantity}) =>{
    return (
        <header className={styles.main_header}>
            <nav className={styles.main_nav}>
                <ul className={styles.nav_items}>
                    <li className={styles.nav_logo}><Link className={styles.nav_link} to='/'>RentABike</Link></li>
                    <li className={styles.cart_container}><Link to='/cart' className={styles.nav_link}><i className="fas fa-shopping-cart"></i><span className={styles.total_quantity}>{totalQuantity ? totalQuantity : null}</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation;