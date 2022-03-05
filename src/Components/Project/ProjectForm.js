import { useState, useEffect } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'


function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method:'GET',
        headers: {'Content-Type': 'application/json'},
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories (data)
            })
        .catch((err => console.log(err)))
    },[]) 

        const submit = (e) => {
            e.preventDefault()
            handleSubmit(project)
        } 

        function handleChange (e){
            setProject({...project, [e.target.name]: e.target.value})
        }
        function handleCategory (e){
            setProject({...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
             }
            })
        }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text'
                   name='name'
                   text='Nome do projeto'
                   placeholder='Insira o nome do projeto'
                   handleOnChange={handleChange}
                   value={project.name ? project.name : ''}/>
                   
            <Input type='number'
                   name='budget'
                   text='Orçamento do projeto'
                   placeholder='Insira o orçamento total'
                   handleOnChange={handleChange}
                   value={project.budget ? project.budget : ''}/>

            <Select text='Selecione a cateroria' 
                    name='category_id' 
                    options={categories} 
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''}/>

            <SubmitButton text={btnText} type='submit' />
        </form>
    )
}

export default ProjectForm; 
