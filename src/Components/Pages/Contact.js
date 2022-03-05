import styles from './Contact.module.css'
import {FaWhatsapp} from 'react-icons/fa'

function Contact() {
    return (
        <div className={styles.container}>
            <h2>Contatos</h2>
            <h3>Horários de atendimento </h3>

            <p>De segunda a sexta, das 9h às 18h, aos sábados das 8h às 13h (exceto feriados)</p>

            <h4>Fone:</h4>
            <p>(51) 4118-5519</p>
            <h4>WhatsApp:</h4>
            <p>(51) 98451-2286 <FaWhatsapp/> </p>
            <h4>Para empresas:</h4>
            <p>(51) 4118-7772</p>

        </div>
    )
    
}

export default Contact