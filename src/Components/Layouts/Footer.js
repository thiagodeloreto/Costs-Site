import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'; 
import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_item}>
                    <FaFacebook/>
                </li>
                <li className={styles.social_item}>
                    <FaInstagram/>
                </li>
                <li className={styles.social_item}>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer