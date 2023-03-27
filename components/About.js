import React from "react"
import { motion } from "framer-motion"
import Parse from "html-react-parser"

function About({ screenData, lang }) {
	const { screenName, JSONscreenVariables } = screenData
	const { topLine, resume } = JSON.parse(JSONscreenVariables)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="flex flex-col h-[100lvh] text-center max-w-7xl py-24 px-10 mx-auto items-center"
		>
			<h3 className="screenName">{screenName[lang]}</h3>
			<div className="flex-1 flex items-center justify-center flex-col md:flex-row text-center md:text-left">
				<motion.img
					initial={{ x: -200, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					src="https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
					className="flex-shrink-0 w-44 h-44 rounded-full object-cover mb-5 md:mb-0 md:rounded-lg md:w-56 md:h-56 xl:w-[500px] xl:h-[450px]"
					alt="own portrait"
				/>
				<div className="flex flex-col justify-center items-center space-y-10 px-0 md:px-10 overflow-hidden">
					<h4 className="text-4xl font-semibold text-center">{Parse(topLine[lang])}</h4>
					<p className="text-base text-justify text-ellipsis overflow-hidden">{resume[lang]}</p>
				</div>
			</div>
		</motion.div>
	)
}

export default About
