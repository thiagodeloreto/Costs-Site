import styles from './Loading.module.css'
import loading from '../../Img/loading.svg'


function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='ícone de Loading' />
        </div>

    )
}

export default Loading