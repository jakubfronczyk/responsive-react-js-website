import React from "react";
import styles from "./Luxury.module.css";
import Card from "./Card.js"

function Luxury() {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from the top luxuty behicles to roll in style</span>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <Card img='https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80}' brand='Rolls Royce'/>
                <Card img='https://images.unsplash.com/photo-1584082411947-dfa856e714eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' brand='Aston Martin'/>
                <Card img='https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' brand='Maserati'/>
                <Card img='https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' brand='Ferrari'/>
            </div>
        </div>
    )
}

export default Luxury;
