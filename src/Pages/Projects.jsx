import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
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
     <motion.div className="projects" animate={{
      scale : [2,1],
      rotate:[90,0],

     }}
     transition = {{
      duration:0.5,
      ease:"easeInOut"
     }}>
       <h2>Projects</h2>
       <div className="wrapper">
        {
            ProjectList.map((currElem)=>{
              return (
                 <motion.div key={currElem.id} whileHover={{scale:1.1,transition:{duration:0.5}}}>
                        <Card>
                          <Card.Img variant='top' src={currElem.image}/>
                           <Card.Body>
                             <Card.Title>{currElem.name}</Card.Title>
                           </Card.Body>
                        </Card>
                 </motion.div>
              )
            })
        }
       </div>
     </motion.div>  )
}

export default Projects