import React from "react"
import { motion } from "framer-motion"
import { urlFor } from "services/sanity"
import Image from "next/image"
function Projects({ screenData, lang, projects }) {
	const { screenName } = screenData

	return (
		<div className="relative h-[100lvh] flex flex-col text-center md:text-left xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto py-24 pr-4 border-y-4 border-black/10 overflow-hidden">
			<h3 className="screenName">{screenName[lang]}</h3>
			<div className="relative flex-1 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 max-w-7xl mx-auto">
				{projects?.map(({ projectName, image, description }, index) => (
					<div
						key={index}
						className="min-w-full snap-center flex flex-col space-y-5 justify-center items-center mb-4"
					>
						<motion.div
							initial={{ opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="relative my-4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px]"
						>
							<Image
								src={urlFor(image).url()}
								alt="project image"
								fill={true}
								className="object-contain"
							/>
						</motion.div>
						<div className="space-y-10 max-w-full mx-8 flex-1">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">{projectName[lang]}</span>
							</h4>
							<p className="text-lg text-justify md:text-left">{description[lang]}</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</div>
	)
}

export default Projects
