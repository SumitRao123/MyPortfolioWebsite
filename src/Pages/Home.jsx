import React from 'react'
import { animate, motion } from 'framer-motion'
const Home = () => {
  return (
    <div className='home'>
      <motion.div className="name" initial={{x : -300,scale:0.5}} animate={{x:0,scale:1}} transition={{duration:1}}>
         Sumit <font>Rao Kherkar</font>
      </motion.div>
         <motion.div className="desc" initial = {{x:300,scale:.5}}
           animate={{x :0,scale:1}}
           transition={{duration:1}}
         >
          <font>FullStack Developer</font> and <font> Tech Enthusiatic</font>
         </motion.div>
    </div>
  )
}

export default Home