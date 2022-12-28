import React from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row,ListGroup } from 'react-bootstrap'
import { animate, motion } from 'framer-motion'
const Contact = () => {
  const handleSubmit = (event)=>{

  }
  return (
    <motion.div className='contact' initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.2}}>
    
    <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className='mb-3' controlId='validationCustom01'>
                 <FormLabel>Name : </FormLabel>
                 <FormControl required type='text' placeholder='Name'/>
              </FormGroup>
              <FormGroup className='mb-3' controlId='validationCustom01'>
                 <FormLabel>Email : </FormLabel>
                 <FormControl required type='email' placeholder='Email'/>
              </FormGroup>
              <FormGroup className='mb-3' controlId='validationCustom01'>
                 <FormLabel>Message : </FormLabel>
                 <FormControl required as="textarea" placeholder='Message'/>
              </FormGroup>
              <Button type='submit'>Submit Form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
          <p>
              If you want to chat about a project — email me on
              sumitkherkar169@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.
            </p>
            <p>
              Currently based in India — available for remote-friendly
              work from December 2023.
            </p>
            <p>
              <ListGroup horizontal>
             
                <ListGroup.Item>
                  <a href="https://www.linkedin.com/in/sumit-rao-b74a90194/">Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.instagram.com/sumitkherkar169/">
                    Instagram
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://twitter.com/IMDmalvia">Twitter</a>
                </ListGroup.Item>
              </ListGroup>
              </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Contact