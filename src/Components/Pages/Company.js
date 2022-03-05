import styles from './Company.module.css'
import image from '../../Img/image.jpg'

import {BiLike} from 'react-icons/bi'
import {BsClockHistory} from 'react-icons/bs'
import {IoIosCalendar} from 'react-icons/io'


function Company() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Sobre o <span>Costs</span></h1>
                <p>
                    O Costs surgiu com uma simples ideia de otimizar os seus projetos
                    utilizando um sistema robusto, a fim de administrar todos os seus
                    gastos de uma forma prática
                </p>
                <p>
                    Através de um layout simples, o usuário pode cadastrar todas as suas operações, 
                    editá-las de maneira pragmática e acrescentar determinados serviços, descontando 
                    do valor total do projeto. 
                </p>
                <p><BiLike/>Simples</p>
                <p><IoIosCalendar/>Fácil</p>
                <p><BsClockHistory/>Dinâmico</p>
            </section>

            <section className={styles.section_image}>
                <img src={image}/>
            </section>

        </div>
    )
}

export default Company