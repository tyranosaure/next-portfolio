import React from "react"
import { motion } from "framer-motion"
import { urlFor } from "services/sanity"
import NoImage from "assets/no-image.webp"
import Image from "next/image"

function ExperienceCard({ experience, lang }) {
	const { jobTitle, company, startDate, endDate, summary, technologies, image } = experience
	console.log(image)
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[100lvh] w-[500px] md:w-[600px] xl:w-[900px] snap-center py-10 mx-5 bg-[#292929] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden border-white/10 border-4 max-w-[100%] md:max-w-[45%] xl:max-w-[30%]">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, y: 0 }}
				className="rounded-full w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] aspect-square object-cover object-center"
				src={image ? urlFor(image).width(500).url() : NoImage}
				alt="experience"
			/>
			<div className="px-0 md:px-10 w-full flex flex-col items-center">
				<h4 className="text-4xl font-light">{jobTitle[lang]}</h4>
				<p className="font-black text-2xl mt-1">{company}</p>
				<div className="flex space-x-2 my-2">
					<Image
						src={image ? urlFor(image).width(500).url() : NoImage}
						className="aspect-square object-cover object-center"
						alt="skill react"
						width={25}
						height={25}
					/>
					<Image
						src={image ? urlFor(image).width(500).url() : NoImage}
						alt="skill react"
						width={25}
						height={25}
					/>
					<Image
						src={image ? urlFor(image).width(500).url() : NoImage}
						alt="skill react"
						width={25}
						height={25}
					/>
				</div>
				<p className="uppercase py-5 text-gray-500">Started work...</p>
				<p>{summary[lang]}</p>
			</div>
		</article>
	)
}

export default ExperienceCard
