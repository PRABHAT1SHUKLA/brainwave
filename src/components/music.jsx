

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { FiMusic, FiShare2, FiDownload, FiStar, FiMenu, FiX } from 'react-icons/fi'

// Sample data for generated tracks
const sampleTracks = [
  { id: 1, name: "Neon Nights", genre: "Synthwave", duration: "3:45" },
  { id: 2, name: "Cyber Dreams", genre: "Ambient", duration: "4:20" },
  { id: 3, name: "Retro Funk", genre: "Electro", duration: "3:10" },
  { id: 4, name: "Digital Horizon", genre: "Chillwave", duration: "5:05" },
]

const AnimatedText = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

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

const Step = ({ number, title, description }) => (
  <motion.div
    className="flex items-start space-x-4"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: number * 0.2 }}
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

const TrackList = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 mt-8"
  >
    <h3 className="text-2xl font-bold mb-4">Recently Generated Tracks</h3>
    <div className="space-y-4">
      {sampleTracks.map((track) => (
        <motion.div
          key={track.id}
          className="flex justify-between items-center border-b border-gray-600 pb-2"
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
        >
          <div>
            <p className="font-semibold">{track.name}</p>
            <p className="text-sm text-gray-400">{track.genre}</p>
          </div>
          <p className="text-gray-400">{track.duration}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

const WaveAnimation = () => (
  <svg className="absolute left-0 right-0 bottom-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <motion.path
      fill="rgba(167, 139, 250, 0.1)"
      fillOpacity="1"
      initial={{ d: "M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
      animate={{ 
        d: [
          "M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          "M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          "M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ]
      }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    />
  </svg>
)

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className=" min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 text-white overflow-hidden">
      <WaveAnimation />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          SynthWave AI
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#how-it-works" className="hover:text-purple-300 transition-colors">How It Works</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a>
            </motion.li>
          </ul>
        </nav>
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-purple-800 absolute top-16 left-0 right-0 z-20"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                  <a href="#features" className="block py-2 hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                  <a href="#how-it-works" className="block py-2 hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                  <a href="#testimonials" className="block py-2 hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <AnimatedText>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Create Music with AI</h1>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="text-xl md:text-2xl mb-8">Unleash your creativity with SynthWave AI - The future of music production</p>
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167,139,250)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </AnimatedText>
        <TrackList />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 relative z-10">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-center mb-12">Amazing Features</h2>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FiMusic className="text-4xl text-purple-400" />}
            title="AI Composition"
            description="Create unique melodies and harmonies with our advanced AI algorithms"
          />
          <FeatureCard
            icon={<FiShare2 className="text-4xl text-purple-400" />}
            title="Collaborate"
            description="Share and collaborate on projects with musicians worldwide"
          />
          <FeatureCard
            icon={<FiDownload className="text-4xl text-purple-400" />}
            title="Export"
            description="Export your creations in various formats for any use case"
          />
          <FeatureCard
            icon={<FiStar className="text-4xl text-purple-400" />}
            title="Pro Effects"
            description="Access a library of professional-grade audio effects and tools"
          />
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Testimonial Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20 relative z-10">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">"SynthWave AI has revolutionized my music production process. It's like having a co-composer that never runs out of ideas!"</p>
            <p className="font-bold">- Alex Johnson, Music Producer</p>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">"As a beginner, SynthWave AI has been an incredible learning tool. It's helping me understand music composition in a whole new way."</p>
            <p className="font-bold">- Sarah Lee, Aspiring Musician</p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <AnimatedText>
          <h2 className="text-4xl font-bold mb-6">Ready to Create?</h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="text-xl mb-8">Join thousands of musicians and start composing with AI today</p>
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167,139,250)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </AnimatedText>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SynthWave AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}