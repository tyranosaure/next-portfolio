import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import SkillsArray from "./SkillsArray"

function Skills({ screenData, lang }) {
	const { screenName, JSONscreenVariables } = screenData
	const { topLine } = JSON.parse(JSONscreenVariables)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			className="relative h-[100lvh] flex flex-col text-center md:text-left md:max-w-7xl xl:px-10 min-h-screen xl:space-y-0 mx-auto overflow-hidden pr-4 py-24"
		>
			<h3 className="screenName">{screenName[lang]}</h3>
			{SkillsArray && (
				<div className="flex-1 flex items-center justify-center">
					<div className="grid grid-cols-4 grid-rows-4 w-fit gap-1 md:gap-4 m-auto animate-spin-skills group-[test]">
						{SkillsArray.map((skill) => (
							<Skill
								key={skill.name}
								{...skill}
							/>
						))}
					</div>
				</div>
			)}
		</motion.div>
	)
}

export default Skills
