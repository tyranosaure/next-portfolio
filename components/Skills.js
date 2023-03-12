import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
function Skills() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative h-[100dvh] flex flex-col text-center md:text-left md:max-w-7xl xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto overflow-hidden pr-4 py-24"
		>
			<h3 className="uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl text-center">Skills</h3>
			<h3 className="p-4 uppercase tracking-[3px] text-gray-500 text-sm text-center">Hover over a skill for currency profieciency</h3>
			<div className="flex-1 flex flex-wrap justify-center sm:grid sm:grid-cols-4 sm:gap-5 sm:content-center sm:items-stretch pt-5 px-5">
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</motion.div>
	)
}

export default Skills
