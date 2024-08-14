import React, { useContext, useEffect } from 'react'
import styles from '../desktop/Desktop.module.css'
import Sidebar from '../../components/Sidebar'
import MainPage from './MainPage'
import NotesPage from './NotesPage'
import { AppContext } from '../../context/AppContext'
function Desktop() {
    const{select,setSelect}=useContext(AppContext)
    useEffect(()=>{
       setSelect('')
       localStorage.setItem('select','')
    },[])
  return (
    <div className={styles.desk}>
        <Sidebar/>
        {select?<NotesPage/>:<MainPage/>}
    </div>
  )
}

export default Desktop