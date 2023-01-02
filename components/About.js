import React from "react"
import { motion } from "framer-motion"
function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src="https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
				</h4>
				<p className="text-base text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae asperiores eos eligendi ducimus hic
					excepturi dolores iusto! Porro, ipsum! Quidem tempora cum consequuntur tempore iure, architecto pariatur non
					perspiciatis ex, maiores amet assumenda nobis repudiandae quae possimus ipsam. Impedit, unde quam nesciunt quidem
					aliquam minima, voluptatibus saepe velit sunt repellendus consequuntur dolore doloribus ratione ipsum blanditiis
					corporis. Voluptatibus atque illo impedit sint veniam? Repellat veritatis ipsum cumque, est optio impedit quaerat
					at dolorum saepe ducimus harum error ea temporibus sunt aperiam illo, expedita vero dolor quibusdam eaque rem
					animi ullam. Error nobis nesciunt quia unde numquam, similique a et!
				</p>
			</div>
		</motion.div>
	)
}

export default About
