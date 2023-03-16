import React from "react"
import { motion } from "framer-motion"
import { urlFor } from "services/sanity"

function Skill({ achievement, image, skillName }) {
	return (
		<div className="group relative flex cursor-pointer p-2">
			<motion.img
				initial={{ opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="xl:w-32 xl:h-32 w-24 h-24 md:h-28 md:w-28  rounded-full border-gray-600 border-4 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
				src={urlFor(image).width(500).url()}
				alt={skillName}
			/>
			<div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">{achievement}</p>
				</div>
			</div>
		</div>
	)
}

export default Skill
