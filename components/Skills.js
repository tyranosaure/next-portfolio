import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
function Skills() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col text-center md:text-left max-w-[2000px] xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto items-center"
		>
			<h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
			<h3 className="p-4 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for currency profieciency</h3>
			<div className="grid grid-cols-4 gap-5 pt-5">
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={false} />
				<Skill directionLeft={false} />
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={false} />
				<Skill directionLeft={false} />
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={false} />
				<Skill directionLeft={false} />
			</div>
		</motion.div>
	)
}

export default Skills
