import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* Main Spinner */}
    <motion.div
      className="relative w-24 h-24"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 border-4 border-transparent border-t-yellow-400 border-r-yellow-400 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Inner Ring */}
      <motion.div
        className="absolute inset-4 border-4 border-transparent border-b-blue-400 border-l-blue-400 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Center Dot */}
      <motion.div
        className="absolute inset-8 bg-white rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
    </motion.div>
    
    {/* Loading Text */}
    <motion.p
      className="mt-6 text-white text-xl font-medium"
      animate={{
        y: [0, -5, 0],
        opacity: [0.6, 1, 0.6]
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity
      }}
    >
      Loading...
    </motion.p>
  </motion.div>
);

export default Loader;