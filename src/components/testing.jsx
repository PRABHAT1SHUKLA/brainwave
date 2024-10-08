import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { FiCloudLightning } from 'react-icons/fi'


const AnimatedText = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Testing(){
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-500 via-orange-400 to-purple-700 ">
          
          <header className="flex justify-between items-center mx-auto px-6 py-6">
            <div className='text-3xl font-bold space-x-5'>
            <motion.div
             initial={{ rotateY: 0 }}
             animate={{ rotateY: 360 }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <FiCloudLightning />
               
            </motion.div>
            <AnimatedText> SLASH</AnimatedText>
            </div>

             <nav>
              <AnimatedText>
                Whatsup
              </AnimatedText>

            </nav> 
        
            
            </header> 


       
    </div>
      
  
  )
}