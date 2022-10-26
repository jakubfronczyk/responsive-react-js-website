import React from 'react'
import styles from './Luxury.module.css'


function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="/"/>
            <div className={styles.content}>
                <h3>{props.brand}</h3>
            </div>
        </div>
    )
}

export default Card