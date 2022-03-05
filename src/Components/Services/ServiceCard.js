import styles from '../Project/ProjectCard.module.css'
import { FaTrashAlt} from 'react-icons/fa'


function ServiceCard ({id, name, description, cost, handleRemove}) {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                 <FaTrashAlt />
                    Excluir
                </button>
                
            </div>
        </div>
    )
}

export default ServiceCard