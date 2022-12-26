import React from 'react'
import { Card } from 'react-bootstrap';

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
    <div className='services'>
      <h2>Services</h2>
      {
        serviceList.map((currElem)=>{
          {/* const [id,name,imageUrl] =  currElem; */}
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
  )
}

export default Services