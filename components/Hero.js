import Link from "next/link"
import React, { useEffect } from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

function Hero({ hero, navigation, lang, screenData }) {
	const { jobTitle } = JSON.parse(screenData.JSONscreenVariables)

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

	const [text] = useTypewriter({
		words: hero ? hero.map((item) => item.name[lang]) : [],
		loop: true,
		delaySpeed: 1500,
	})

	return (
		<div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden z-0">
			<BackgroundCircles />
			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="https://media.tenor.com/5UrSnlHPuXkAAAAC/fire-puppet.gif"
				alt="profile"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 tracking-[10px]">{jobTitle[lang]}</h2>
				<h1 className="py-5 text-3xl lg:text-6xl font-semibold scroll-px-10">
					<span className="mr-1">{text}</span>
					<Cursor
						cursorStyle="_"
						cursorColor="#F7AB0A"
					/>
				</h1>
				<div className="flex flex-col md:flex-row">
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
			</div>
		</div>
	)
}

export default Hero
