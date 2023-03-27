import React from "react"
import { motion } from "framer-motion"
import Parse from "html-react-parser"
import Image from "next/image"
import KermitFrogPicture from "assets/kermit-frog.webp"

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
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className="w-[150px] h-[150px]"
				>
					<Image
						src={KermitFrogPicture}
						alt="own portrait"
						width={150}
						height={150}
						className="object-cover rounded-full mb-5 md:mb-0 md:rounded-lg "
					/>
				</motion.div>
				<div className="flex flex-col justify-center items-center space-y-10 px-0 md:px-10 overflow-hidden">
					<h4 className="text-4xl font-semibold text-center">{Parse(topLine[lang])}</h4>
					<p className="text-base text-justify text-ellipsis overflow-hidden">{resume[lang]}</p>
				</div>
			</div>
		</motion.div>
	)
}

export default About
