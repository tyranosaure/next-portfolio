import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
function Skills({ screenData, lang, skills }) {
	const { screenName, JSONscreenVariables } = screenData
	const { topLine } = JSON.parse(JSONscreenVariables)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative h-[100dvh] flex flex-col text-center md:text-left md:max-w-7xl xl:px-10 min-h-screen xl:space-y-0 mx-auto overflow-hidden pr-4 py-24"
		>
			<h3 className="uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl text-center">{screenName[lang]}</h3>
			<h3 className="p-4 uppercase tracking-[3px] text-gray-500 text-sm text-center">{topLine[lang]}</h3>
			{skills && (
				<div className="flex flex-wrap justify-center items-center sm:grid sm:grid-cols-4 sm:gap-5 sm:content-center sm:items-stretch pt-4 px-4 my-auto">
					{skills?.map((skill, id) => (
						<Skill
							key={id}
							{...skill}
						/>
					))}
				</div>
			)}
		</motion.div>
	)
}

export default Skills
