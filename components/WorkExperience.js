import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
function WorkExperience({ screenData, experiences, lang }) {
	const { screenName } = screenData

	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			whileInView={{ opacity: 1 }}
			className="h-screen flex overflow-hidden flex-col text-left px-10 py-24 justify-center mx-auto mr-4"
		>
			<h3 className="text-center uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl py-8">
				{screenName[lang]}
			</h3>
			<div className="flex-1 flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pb-6 max-w-7xl mx-auto">
				{experiences.map((experience, index) => (
					<ExperienceCard
						key={index}
						experience={experience}
						lang={lang}
					/>
				))}
			</div>
		</motion.div>
	)
}

export default WorkExperience
