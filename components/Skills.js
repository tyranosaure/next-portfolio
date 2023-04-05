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
			className="screenContainer"
		>
			<h3 className="screenName">{screenName[lang]}</h3>
			{SkillsArray && (
				<div className="flex items-center justify-center flex-1">
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
