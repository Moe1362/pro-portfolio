import { motion } from "framer-motion"
import { SKILLS } from "../constants"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const Skills = () => {
  return (
    <section className="px-6 py-10" id="skills">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Technical Skills
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {SKILLS.map((group) => (
          <motion.div
            key={group.category}
            variants={childVariants}
            className="backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg"
          >
            <h3 className="text-xl mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 rounded-full border border-stone-50/30 bg-stone-950/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
