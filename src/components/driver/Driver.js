import React from 'react'
import Drive from '../../images/drive.png'
import styles from './Driver.module.css'

function Driver() {
    return (
        <div className={styles.driver}>
            <div className={styles.left}>
                <img src={Drive} alt="/" />
            </div>
            <div className={styles.right}>
                <h2>Find your perfec car <span>to try before you buy</span></h2>
                <p>Make sure your future wheels work well with your lifestyle by taking youe time in driver's seat. </p>
                <button>Browse Cars</button>
            </div>
        </div>
    )
}

export default Driver
