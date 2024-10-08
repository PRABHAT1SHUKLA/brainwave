import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { FiCloudLightning } from 'react-icons/fi'

export default function Testing(){
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-500 via-orange-400 to-purple-700 ">
          
          <header className="flex justify-between items-center mx-auto px-6 py-6">
            <div className='flex text-3xl font-bold space-x-2'>
            <motion.div
             initial={{ rotateY: 0 }}
             animate={{ rotateY: 360 }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
             className='text-3xl flex font-bold '>
              <FiCloudLightning />
               
            </motion.div>
            SLASH
            </div>
        
            
            </header> 


       
    </div>
      
  
  )
}