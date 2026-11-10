import { motion } from "framer-motion"
import { EDUCATION } from "../constants"

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const Education = () => {
  return (
    <section className="px-6 py-10" id="education">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Education
      </h2>
      <div className="h-1 w-20 bg-white"></div>

      <motion.div
        className="space-y-6 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {EDUCATION.map((item) => (
          <motion.div
            key={item.title}
            variants={childVariants}
            className="flex flex-col md:flex-row md:justify-between"
          >
            <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
              {item.yearRange}
            </div>
            <div className="md:w-3/4">
              <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="mb-1">{item.school}</p>
                <p className="text-sm italic">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Education
