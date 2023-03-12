import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import FrFlag from "assets/flags/fr.png"
import EnFlag from "assets/flags/en.png"

function Header({ lang, setLang, screenData }) {
	const { contact } = JSON.parse(screenData.JSONscreenVariables)
	return (
		<header className="sticky top-0 p-5 pr-8 flex items-center justify-between max-w-7xl mx-auto z-20">
			<motion.div
				initial={{ x: -250, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="flex items-center space-x-2"
			>
				<SocialIcon
					url="https://www.linkedin.com/in/bassouayoub/"
					target={"_blank"}
					fgColor="white"
					bgColor="gray"
				/>
				<SocialIcon
					className="cursor-pointer"
					url="https://github.com/tyranosaure"
					target={"_blank"}
					fgColor="white"
					bgColor="gray"
				/>
			</motion.div>

			<motion.div
				initial={{ x: 250, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<Link
					href="#contact"
					legacyBehavior={true}
				>
					<a className="h-[50px] hover:bg-[#F7AB0A] rounded-full transition duration-300 flex items-center hover:text-slate-700">
						<p className="uppercase px-5 hidden md:inline-flex text-sm font-bold">{contact[lang]}</p>
					</a>
				</Link>
				<Image
					src={lang === "fr" ? FrFlag : EnFlag}
					width="32"
					height="32"
					alt="Language"
					onClick={() => setLang(lang === "fr" ? "eng" : "fr")}
					className="border-2 border-gray-300 border-opacity-25 rounded-full cursor-pointer ml-5"
				/>
			</motion.div>
		</header>
	)
}

export default Header
