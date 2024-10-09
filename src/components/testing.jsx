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

const Step = ({ number, title, description }) => (
  <motion.div
    className="flex items-start space-x-4"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: number * 0.2 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold"
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {number}
    </motion.div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
)

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
             animate={{ rotateX: 360 }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <FiCloudLightning />

              joo
               
            </motion.div>
            <AnimatedText> SLASH</AnimatedText>
            </div>

             <nav>
              <AnimatedText>
              <motion.div
             initial={{ rotateY: 0 }}
             animate={{ rotateX: 360 }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
             
               
             Whatsup
            </motion.div>

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
       
   <section id="how-it-works" className="container mx-auto px-4 py-20 relative z-10">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        </AnimatedText>
        <div className="space-y-8">
          <Step
            number={1}
            title="Choose Your Style"
            description="Select from a variety of genres and moods to inspire your AI-generated composition"
          />
          <Step
            number={2}
            title="Customize Parameters"
            description="Adjust tempo, key, and other musical elements to fine-tune your creation"
          />
          <Step
            number={3}
            title="Generate and Edit"
            description="Let the AI create a base track, then edit and refine it to your liking"
          />
          <Step
            number={4}
            title="Share Your Masterpiece"
            description="Export your finished track and share it with the world"
          />
        </div>
      </section>
     



       
    </div>
      
  
  )
}