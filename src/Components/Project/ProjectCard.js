import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa'



function ProjectCard({name, budget, id,category, handleRemove}) {

    const remove  = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span>{category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/Project/${id}`}>
                    <FaPencilAlt/> Editar
                </Link>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard