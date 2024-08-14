import React from 'react'
import styles from './DesktopContent.module.css'
import { LuDot } from "react-icons/lu";
function DesktopContent({note}) {
  const formatDisplay = (content) => {
    return content.split('\n').map((row, index) => (
        <React.Fragment key={index}>
            {row}
            <br />
        </React.Fragment>
    ));
};
  // console.log(note, 'note')
  return (
    <div className={styles.container}> 
        <div className={styles.matter}>
            <p>{formatDisplay(note.content)}</p>
        </div>
        <div className={styles.dandt}>
            <div className={styles.div1}>{note.date}</div>
            <div className={styles.div2}><LuDot style={{fontWeight:'400',fontSize:'30px'}}/></div>
            <div className={styles.div3}>{note.time}</div>
        </div>
    </div>
  )
}

export default DesktopContent