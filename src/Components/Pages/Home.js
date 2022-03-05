import styles from './Home.module.css'
import savings from '../../Img/costs.png'
import LinkButton from '../Layouts/LinkButton'


import {AiFillFolderAdd} from 'react-icons/ai'
import {BsCalculatorFill} from 'react-icons/bs'
import {GrPlan} from 'react-icons/gr'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece agora mesmo a gerenciar os seus projetos!</p>
            <div >
                <LinkButton to='/NewProject' text='Criar Projeto'/>

            </div>
            <img src={savings} alt='Costs' />

            <h2>Um aplicativo para otimizar os seus gastos</h2>
            <ul>
                
                <li><AiFillFolderAdd/>Adicione serviços</li>
                <li><BsCalculatorFill/>Calcule gastos</li>
                <li><GrPlan/>Gerencie com precisão seus projetos</li>
            </ul>
        </section>

    
    
    )
}

export default Home