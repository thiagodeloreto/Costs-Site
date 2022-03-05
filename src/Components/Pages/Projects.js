import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'

import Message from "../Message/Message"
import Container from '../Layouts/Container'
import LinkButton from "../Layouts/LinkButton"
import Loading from "../Layouts/Loading"

import styles from './Projects.module.css'
import ProjectCard from "../Project/ProjectCard"

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/Projects', {
        method:'GET',
        headers: {'Content-Type': 'application/json'},
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjects (data)
            setRemoveLoading(true)
        })
        .catch((err => console.log(err)))
    },[]) 

    function removeProject(id){
        fetch(`http://localhost:5000/Projects/${id}`, {
            method:'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id ))
                setProjectMessage('O projeto foi removido!')
            })
            .catch((err => console.log(err)))
        }



    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/NewProject' text='Criar Projeto'/>
            </div>
            {message && <Message type='success' msg={message}/>}
            {projectMessage && <Message type='success' msg={projectMessage}/>}

            <Container customClass='start'>
                {projects.length > 0 &&
                 projects.map((project) => (
                    <ProjectCard 
                    name={project.name}
                    id={project.id}
                    category={project.category.name}
                    budget={project.budget}
                    key={project.id} 
                    handleRemove={removeProject}/>
                 ))
                 }
                 {!removeLoading && <Loading />}
                 {projects.length == 0 &&
                    <p>Não há projetos cadastrados.</p>
                 }
            </Container>
        </div>
    )
}

export default Projects