import Link from "next/link"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

function Hero() {
	const [text] = useTypewriter({
		words: ["Hi, I'm Ayoub Bassou !", "My motto :", "Eat,", "Sleep,", "<Code />,", "Repeat !"],
		loop: true,
		delaySpeed: 2000,
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
				<h2 className="text-sm uppercase text-gray-500 tracking-[10px]">Web developer</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
					<span className="mr-3">{text}</span>
					<Cursor
						cursorStyle="_"
						cursorColor="#F7AB0A"
					/>
				</h1>
				<div className="pt-5">
					<Link
						href="#about"
						className="heroButton"
					>
						About
					</Link>
					<Link
						href="#experience"
						className="heroButton"
					>
						Experience
					</Link>
					<Link
						href="#skills"
						className="heroButton"
					>
						Skills
					</Link>
					<Link
						href="#projects"
						className="heroButton"
					>
						Projects
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
