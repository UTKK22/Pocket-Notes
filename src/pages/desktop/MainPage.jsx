import React from 'react'
import styles from "../desktop/MainPage.module.css"
import preimage from "../../assets/previewimage.png"
import locker from "../../assets/lock.png"

function MainPage() {
    return (
        <div className={styles.container}>
            <div className={styles.preview}>
                <img src={preimage} />
                <div className={styles.text}>
                    <p className={styles.ftext}>Pocket Notes</p>
                    <p className={styles.ltext}>Send and receive messages without keeping your phone online.
                        <br />
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
                <div className={styles.lock}>
                    <img src={locker} alt="locker"/>
                    <p>end-to-end encrypted</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage