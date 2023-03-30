import React from "react"
import { motion } from "framer-motion"

function Skill({
	name = "no name",
	icon,
	color = "text-white",
	backgroundColor = "bg-black",
	fontSize = "text-7xl",
	borderColor = "border-black/30",
	gridPosition = "",
	hoverFontSize = "text-base",
}) {
	return (
		<div
			className={`${gridPosition} group relative flex cursor-pointer animate-spin-skills-reverse xl:w-28 xl:h-28 w-20 h-20 md:h-24 md:w-24`}
		>
			<motion.div
				initial={{ opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className={`${color} ${backgroundColor} ${borderColor} ${fontSize} flex items-center justify-center rounded-full border-[5px] transition duration-300 ease-in-out w-full h-full`}
			>
				{icon}
			</motion.div>
			<div
				className={`absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ${backgroundColor} h-full w-full rounded-full z-0 ${borderColor} border-4`}
			>
				<div className="flex items-center justify-center h-full">
					<p className={`${color} ${hoverFontSize} font-bold  opacity-100`}>{name}</p>
				</div>
			</div>
		</div>
	)
}

export default Skill
