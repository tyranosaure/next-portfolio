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
			className="screenContainer h-fit md:h-svh border-y-4 border-black/10"
		>
			<h3 className="screenName">{screenName[lang]}</h3>
			<div className="flex flex-col items-center justify-center flex-1 text-center md:flex-row md:text-left">
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] relative my-4 aspect-square"
				>
					<Image
						src={KermitFrogPicture}
						alt="own portrait"
						fill={true}
						sizes="150px, min-width(768px) 300px"
						className="object-cover mb-5 rounded-full aspect-square"
					/>
				</motion.div>
				<div className="flex flex-col items-center justify-center px-0 space-y-10 overflow-hidden md:px-10">
					<h4 className="text-4xl font-semibold text-center">{Parse(topLine[lang])}</h4>
					<p className="overflow-hidden text-base text-justify md:text-lg xl:text-2xl text-ellipsis">{resume[lang]}</p>
				</div>
			</div>
		</motion.div>
	)
}

export default About
