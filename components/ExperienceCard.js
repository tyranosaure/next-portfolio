import React from "react"
import { motion } from "framer-motion"
function ExperienceCard() {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-full w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 mx-5 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden border-[rgba(255,255,255,0.1)] border-[0.5px]">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, y: 0 }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src="https://www.asi.fr/sites/default/files/styles/og_image/public/2021-09/logo-asi-og.jpg?itok=mwkfRV5B"
				alt=""
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Web developer</h4>
				<p className="font-black text-2xl mt-1">ASI</p>
				<div className="flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full object-cover"
						src="https://fr.reactjs.org/logo-og.png"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full object-cover"
						src="https://fr.reactjs.org/logo-og.png"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full object-cover"
						src="https://fr.reactjs.org/logo-og.png"
						alt=""
					/>
				</div>
				<p className="uppercase py-5 text-gray-500">Started work..</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
