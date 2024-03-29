import Link from "next/link"
import React, { useEffect } from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import HeroPic from "assets/hero-pic.webp"

function Hero({ hero, navigation, lang }) {
	useEffect(() => {
		hero &&
			hero.sort((a, b) => {
				return a.order - b.order
			})
		navigation &&
			navigation.sort((a, b) => {
				return a.order - b.order
			})
	}, [hero, navigation])

	const [text] = useTypewriter({
		words: hero ? hero.map((item) => item.name[lang]) : [],
		loop: true,
		delaySpeed: 1500,
	})

	return (
		<div className="flex-col justify-center px-6 screenContainer">
			<BackgroundCircles>
				<Image
					className="relative object-cover mx-auto mb-3 bg-yellow-500 border-4 border-white rounded-full aspect-square sm:border-4 sm:mb-0"
					width="200"
					height="200"
					src={HeroPic}
					alt="profile"
					priority
				/>
			</BackgroundCircles>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.25 }}
				className="z-20 sm:absolute bg-white/0 md:top-[72dvh]"
			>
				<span className="text-3xl font-semibold lg:text-6xl scroll-px-10">
					<span className="font-[Marlin] mr-1 drop-shadow-2xl whitespace-nowrap">{text}</span>
					<Cursor
						cursorStyle="_"
						cursorColor="#F7AB0A"
					/>
				</span>
				<div className="flex flex-col items-center pt-4 md:flex-row">
					{navigation?.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="heroButton"
						>
							{item.name[lang]}
						</Link>
					))}
				</div>
			</motion.div>
		</div>
	)
}

export default Hero
