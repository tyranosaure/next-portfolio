import React from "react"
import { motion } from "framer-motion"
function Projects() {
	const projects = [1, 2, 3, 4, 5]
	return (
		<div className="relative h-screen flex flex-col text-center md:text-left max-w-[2000px] xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto py-24 pr-4">
			<h3 className="uppercase  tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl py-4 text-center">Projects</h3>
			<div className="relative flex-1 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects?.map((project, index) => (
					<div
						key={index}
						className="min-w-full snap-center flex flex-col space-y-5 justify-center items-center mb-4"
					>
						<motion.img
							initial={{ opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
							alt=""
							className="h-36 md:h-56"
						/>
						<div className="space-y-10 max-w-full mx-8">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									Case study {index + 1} of {projects.length} :
								</span>
							</h4>
							<p className="text-lg text-justify md:text-left">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laborum consectetur
								voluptatibus fugit molestiae accusamus. Rerum, explicabo quibusdam veniam voluptates.
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</div>
	)
}

export default Projects
