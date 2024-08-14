import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import styles from '../mobile/Mobile.module.css'
import Sidebar from '../../components/Sidebar'
import NotesPage from '../desktop/NotesPage'
function Mobile() {
    const {select,setSelect}=useContext(AppContext)
    useEffect(()=>{
      setSelect('')
      localStorage.setItem(select,'')
    },[])
  return (
    <div className={styles.mobil}>  
       {(select)?<NotesPage/>:<Sidebar/>}
    </div>
  )
}

export default Mobile