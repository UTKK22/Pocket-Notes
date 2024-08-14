import React, { useState, useEffect, useContext } from 'react'
import styles from "../components/Sidebar.module.css"
import Modal from '../components/Modal';
import Grouptitle from '../utilities/Grouptitle'
import { AppContext } from '../context/AppContext';
function Sidebar() {
    const [isModalOpen, setModalOpen] = useState(false);
    const {titles, setTitles, select}= useContext(AppContext)
    return (
        <div className={ select ? `${styles.sidebar} ${styles.sidebarActive}`: `${styles.sidebar}`}>
            <p>Pocket Notes</p>
            <button className={styles.plus} onClick={() => setModalOpen(true)}><span>+</span></button>
            <div className={styles.groupes}>
                <div>
                    {titles?.map((title, index) => {
                        return <Grouptitle title={title} key={index} />
                    })}
                </div>
            </div>
            {isModalOpen && (
                <Modal groupNames={titles} setgroupNames={setTitles} onClose={() => setModalOpen(false)} />
            )
            }
        </div>

    )
}

export default Sidebar