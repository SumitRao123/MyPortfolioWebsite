import React from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
const Services = () => {
  const serviceList = [{
    id : 1,
    name :  "frontEnd Development",
    image:"https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png"
  },
  {
    id : 2,
    name : "Backend Development",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqdfAj0DDvsZPbLghS37lFxv06oauk1U-iQ&usqp=CAU"
  },
  {
    id : 3,
    name : "Database  Managment",
    image : "https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png"

  }
]

  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:.2}}>

    <div className='services'>
      <h2>Services</h2>
      {
        serviceList.map((currElem)=>{
          {/* const [id,name,imageUrl] =  currElem; */}
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
    </motion.div>
  )
}

export default Services