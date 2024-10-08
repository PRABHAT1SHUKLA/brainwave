import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { FiCloudLightning , FiAlertTriangle , FiAirplay, FiAnchor } from 'react-icons/fi'


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

const Features =[
  {
    icon : <FiAnchor/>,
    title: "title 1",
    description: "description 1",
  },
  {
    icon : <FiAirplay/>,
    title: "title 2",
    description: "description 2",
  },
  {
    icon : <FiAlertTriangle/>,
    title: "title 3",
    description: "description 3",
  }
]



const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

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
  
   <div className='flex flex-col'>
   {
        Features.map((Feature) =>{
          return(
            <FeatureCard key={Feature.title} icon={Feature.icon} title={Feature.title} description={Feature.description}/>
          )
        
        })
       }
   </div>
       
     



       
    </div>
      
  
  )
}