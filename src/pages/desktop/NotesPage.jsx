import React, { useContext, useState, useEffect } from 'react'
import styles from "../desktop/Notespage.module.css"
import { IoMdSend} from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import DesktopContent from '../../utilities/DesktopContent'
import { AppContext } from '../../context/AppContext';
import { nameinitials, titlename } from '../../utilities/TitleandAvatar';
function NotesPage() {
    const [text, setText] = useState("");
    const { notes, setNotes, select, titles,setSelect} = useContext(AppContext);
     if(!select){
        return null;
     }
    const current = new Date();
    const displayCards = notes.filter((note, index) => {
        return note.title === select
    })
    // console.log('select>>>>',select)
    const colour = titles?.filter((title) => {
        // console.log(titles, ">>>>>>>>>>>>titles", select);
        return title.name === select && title.color;
      }).map(title => title.color);

    const handlekey = (e) => {
        if (e.key === "Enter"&&!e.shiftKey) {
            e.preventDefault();
            handleSave();
        }
    }
    function getTime() {
        let hours = current.getHours();
        let min = current.getMinutes();
        min = min < 10 ? "0" + min : min;
        let merid = hours >= 12 ? 'Pm' : 'Am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const currentTime = `${hours}:${min} ${merid}`;
        return `${currentTime}`;
    }
    function getDate() {
        const month = current.toLocaleString('default', { month: 'long' });
        const year = current.getFullYear();
        const date = current.getDate();
        return `${date} ${month} ${year}`;
    }
    const handleSave = () => {
        if (!text.trim()) {
            return;
        }
        const newNote = {
            id:Date.now(),
            title:select,
            content:text.trim(),
            date:getDate(),
            time:getTime(),
        }
        setNotes([...notes, newNote])
        setText("")
    }
    
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleback=()=>{
        setSelect('')
        console.log('/mobile')
    }
    // console.log(notes, 'NotesPage')
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            {(select)?
                <div className={styles.backbutton}>
                    <button onClick={handleback}><IoMdArrowBack className={styles.arrowback}/></button>
                </div>:""}
                <div className={styles.headeravatar} style={{ backgroundColor: colour }}>
                    {nameinitials(select)}
                </div>
                <div className={styles.headertext}>
                    {titlename(select)}
                </div>
            </div>
            <div className={styles.body} >
                {displayCards?.map((note, index) => {
                    return <DesktopContent key={index} note={note} />
                })
                }
            </div>
            <div className={styles.footer}>
                <textarea value={text} onChange={handleChange} onKeyDown={handlekey} placeholder="Enter your text here..........." />
                <button onClick={handleSave} disabled={text.length === 0} className={styles.sendbutton}><IoMdSend className={text.length === 0 ? styles.senddisable : styles.sendenable} /></button>
            </div>

        </div>
    )
}
export default NotesPage