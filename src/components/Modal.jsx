import { useRef, useState } from 'react'
import styles from "./Modal.module.css"
function Modal({ groupNames, setgroupNames, onClose }) {
    const [groupName, setGroupName] = useState("");
    const [bgColor, setBgColor] = useState("");
    const modalRef = useRef(null)
    const clickOnOverlay = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose()
        }
    }
    const handlecreate = (e) => {
        setGroupName(e.target.value)
    }
    const handlecolor = (e) => {
        const obj = window.getComputedStyle(e.target, null);
        setBgColor(obj.getPropertyValue("background-color"))
    }
    const handlesave=()=>{
        const newgroupname={name:groupName, color:bgColor};
        setgroupNames([...groupNames,newgroupname]);
        localStorage.setItem("titles",JSON.stringify([groupNames]))
        onClose()
    }
    return (
        <div onClick={(event) => clickOnOverlay(event)} className={styles.overlay}>
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.head}>
                    <h2 >Create New Notes group</h2>
                </div>
                <div className={styles.moda}>
                    <h2>Group Name</h2>
                    <input type='text' placeholder='Enter your group name....' value={groupName} onChange={handlecreate}/>
                </div>
                <div className={styles.optcolor}>
                    <h2>Choose colour</h2>
                    <div className={styles.color}>
                        <button onClick={handlecolor} className={styles.color1}></button>
                        <button onClick={handlecolor} className={styles.color2}></button>
                        <button onClick={handlecolor} className={styles.color3}></button>
                        <button onClick={handlecolor} className={styles.color4}></button>
                        <button onClick={handlecolor} className={styles.color5}></button>
                        <button onClick={handlecolor} className={styles.color6}></button>
                    </div>
                </div>
                <button disabled={groupName.length===0 || bgColor.length===0}className={groupName.length===0 || bgColor.length===0? styles.disablecreate : styles.enablecreate} onClick={handlesave}>Create</button>
            </div>
        </div>
    )
}

export default Modal