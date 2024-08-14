import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import styles from '../utilities/Grouptitle.module.css'
import {titlename,nameinitials} from '../utilities/TitleandAvatar'
function Grouptitle({title}) {
    const[active,setactive]=useState(false)
    // console.log(title,'In the groutptitle');
    const {setSelect, select } = useContext(AppContext);
   const avatar=nameinitials(title.name)
    const newTitle = titlename(title.name)
    // console.log({newTitle, avatar})
    const handletitle = () => {
        setSelect(title.name)
    }
    useEffect(()=>{
        if(select===title?.name ){
            setactive(true)
        }
        else {
            setactive(false)
        }
    }, [select])
    return (
        <div onClick={handletitle} className={(active) ? styles.groupavataractive : styles.groupavatar}>
            <div className={styles.grouplogo} style={{ backgroundColor: title.color }}>
                {avatar}
            </div>
            <div>
                {newTitle}
            </div>
        </div>
    )
}


export default Grouptitle