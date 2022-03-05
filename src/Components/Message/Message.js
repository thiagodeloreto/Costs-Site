import { useState, useEffect } from 'react'
import styles from './Message.module.css'

function Message({type, msg}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        } else {
            setVisible(true)
            const timer = setTimeout (() => {
                setVisible(false)
            }, 3000)
        }

        return clearTimeout()

    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.massege} ${styles[type]}`}>{msg}</div>
            )}
        </>
        
    )
}

export default Message