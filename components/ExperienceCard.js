import React from "react"
import { urlFor } from "services/sanity"
import NoImage from "assets/no-image.webp"
import Image from "next/image"
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJenkins, FaJs, FaLess, FaNodeJs, FaReact } from "react-icons/fa"
import { SiMysql } from "react-icons/si"

function ExperienceCard({ experience, lang }) {
	const { jobTitle, company, startDate, endDate, summary, technologies, image } = experience

	const formatDate = (dateString, lang) => {
		const date = new Date(dateString)
		const options = { year: "numeric", month: "long" }
		return date.toLocaleDateString(lang, options)
	}

	const startDateFormated = formatDate(startDate, lang === "fr" ? "fr-FR" : "en-US")
	const endDateFormated = formatDate(endDate, lang === "fr" ? "fr-FR" : "en-US")

	const duration =
		endDate && startDateFormated !== endDateFormated
			? `${startDateFormated} - ${endDateFormated}`
			: `${lang === "fr" ? "Depuis" : "Since"} ${startDateFormated}`

	return (
		<article className="flex flex-col rounded-lg items-center snap-center p-5 mx-5 bg-[#292929] cursor-default overflow-hidden border-white/10 border-4 last:mr-auto first:ml-auto w-[40%] min-w-[290px] space-y-2">
			<div className="relative flex-1 aspect-square my-4">
				<Image
					src={image ? urlFor(image).width(200).height(200).url() : NoImage}
					fill={true}
					alt="experience"
					className="rounded-full object-cover border-4 border-white/10"
				/>
			</div>
			<div className="w-full flex flex-col items-center space-y-4">
				<h4 className="text-2xl text-center">{jobTitle[lang]}</h4>
				<p className="font-black text-lg mt-1 text-gray-400">{company}</p>
				<div className="flex space-x-2 my-2">{technologies.map((technology) => getTechnologyIcon(technology))}</div>
				<p className="p-4 text-justify">{summary[lang]}</p>
				<p className="py-2 text-gray-500 font-bold">{duration}</p>
			</div>
		</article>
	)
}

export default ExperienceCard

const getTechnologyIcon = (technology) => {
	let className = ""
	let icon = "No icons found"

	if (technology === "HTML") {
		className = "text-[#E34F26]"
		icon = <FaHtml5 />
	} else if (technology === "CSS") {
		className = "text-[#1572B6]"
		icon = <FaCss3Alt />
	} else if (technology === "JavaScript") {
		className = "text-[#F7DF1E]"
		icon = <FaJs />
	} else if (technology === "Git") {
		className = "text-[#D64331]"
		icon = <FaGitAlt />
	} else if (technology === "Jenkins") {
		className = "text-[#B94138]"
		icon = <FaJenkins />
	} else if (technology === "LESS") {
		className = "text-[#2F4D75]"
		icon = <FaLess />
	} else if (technology === "Java") {
		className = "text-[#DA8136]"
		icon = <FaJava />
	} else if (technology === "MySQL") {
		className = "text-[#085D86]"
		icon = <SiMysql />
	}

	return (
		<p
			key={technology}
			className={`text-3xl ${className}`}
		>
			{icon}
		</p>
	)
}
