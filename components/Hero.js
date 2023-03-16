import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import FirePuppet from "assets/fire-puppet.gif"

function Hero({ hero, navigation, lang, screenData }) {
	const [showText, setShowText] = useState(false)
	useEffect(() => {
		hero &&
			hero.sort((a, b) => {
				return a.order - b.order
			})
		navigation &&
			navigation.sort((a, b) => {
				return a.order - b.order
			})
	}, [])

	useEffect(() => {
		const delay = setTimeout(() => {
			setShowText(true)
		}, 3250)
		return () => clearTimeout(delay)
	}, [])

	const [text] = useTypewriter({
		words: hero ? hero.map((item) => item.name[lang]) : [],
		loop: true,
		delaySpeed: 1500,
	})

	return (
		<div className="relative h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden">
			<BackgroundCircles>
				<Image
					className="relative rounded-full mx-auto object-cover aspect-square border-4 border-black/20"
					width="175"
					height="175"
					src={FirePuppet}
					alt="profile"
					priority
				/>
			</BackgroundCircles>
			{showText && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.25 }}
					className="z-20 absolute bg-white/0 md:top-[72dvh]"
				>
					<span className="text-3xl lg:text-6xl font-semibold scroll-px-10">
						<span className="font-[Marlin] mr-1 drop-shadow-2xl">{text}</span>
						<Cursor
							cursorStyle="_"
							cursorColor="#F7AB0A"
						/>
					</span>
					<div className="flex flex-col md:flex-row pt-4">
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
			)}
		</div>
	)
}

export default Hero
