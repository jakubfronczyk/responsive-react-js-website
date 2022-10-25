import React from 'react'
import styles from './Find.module.css'


function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="/"/>
            <p>{props.brand}</p>
        </div>
    )
}

export default Card
