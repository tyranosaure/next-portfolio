import React from "react"
import { motion } from "framer-motion"
function Projects() {
	const projects = [1, 2, 3, 4, 5]
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects?.map((project, index) => (
					<div
						key={index}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
							alt=""
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-full">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									Case study {index + 1} of {projects.length} :
								</span>
							</h4>
							<p className="text-lg text-center md:text-left">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laborum consectetur
								voluptatibus fugit molestiae accusamus. Rerum, explicabo quibusdam veniam voluptates
								consequuntur delectus illo, molestias unde ut sapiente voluptatum laborum ad nihil
								dolorum, voluptas non repudiandae saepe. Voluptatum quo sapiente ducimus odit eos. Nobis
								laborum exercitationem, eius repudiandae iure molestiae autem!
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</div>
	)
}

export default Projects
