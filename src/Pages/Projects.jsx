import React from 'react'
import { Card } from 'react-bootstrap'

const Projects = () => {
  const ProjectList = [{
     id : 1,
     name : "Weather Application",
     image : "https://s3.amazonaws.com/www-inside-design/uploads/2018/05/weather-app-4_feature.jpg",   
  },
  {
    id: 2,
    name : "Todolist",
    image : "https://www.ntaskmanager.com/wp-content/uploads/2019/10/task_management_hero.png"
  }]
  return (
     <div className="projects">
       <h2>Projects</h2>
       <div className="wrapper">
        {
            ProjectList.map((currElem)=>{
              return (
                 <div key={currElem.id}>
                        <Card>
                          <Card.Img variant='top' src={currElem.image}/>
                           <Card.Body>
                             <Card.Title>{currElem.name}</Card.Title>
                           </Card.Body>
                        </Card>
                 </div>
              )
            })
        }
       </div>
     </div>  )
}

export default Projects