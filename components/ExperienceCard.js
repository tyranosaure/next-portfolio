import React from "react"
import { urlFor } from "services/sanity"
import NoImage from "assets/no-image.webp"
import Image from "next/image"

function ExperienceCard({ experience, lang }) {
	const { jobTitle, company, startDate, endDate, summary, technologies, image } = experience

	function getDataFromApi() {
		const url = "https://api.github.com/users/kermitfrog/repos"
		fetch(url)
			.then((response) => response.json())
			.then((data) => console.log(data))
	}

	return (
		<article className="flex flex-col rounded-lg items-center snap-center py-10 mx-5 bg-[#292929] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden border-white/10 border-4 last:mr-auto first:ml-auto w-[40%] space-y-2">
			<div className="relative w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] min-h-[50px] xl:min-h-[100px]">
				<Image
					src={image ? urlFor(image).width(200).height(200).url() : NoImage}
					fill={true}
					sizes="(min-width: 1280px) 100px, 50px"
					alt="experience"
					className="rounded-full object-cover"
				/>
			</div>
			<div className="px-0 md:px-10 w-full flex flex-col items-center">
				<h4 className="text-3xl font-light">{jobTitle[lang]}</h4>
				<p className="font-black text-lg mt-1 text-gray-400">{company}</p>
				<div className="flex space-x-2 my-2">
					<Image
						src={image ? urlFor(image).width(25).url() : NoImage}
						className="aspect-square object-cover object-center"
						alt="skill react"
						width={25}
						height={25}
					/>
					<Image
						src={image ? urlFor(image).width(25).url() : NoImage}
						alt="skill react"
						width={25}
						height={25}
					/>
					<Image
						src={image ? urlFor(image).width(25).url() : NoImage}
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
