import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import FrFlag from "assets/flags/fr.png"
import EnFlag from "assets/flags/en.png"
import { BsGithub } from "react-icons/bs"
import { TfiLinkedin } from "react-icons/tfi"

function Header({ lang, setLang, screenData }) {
	const { contact } = JSON.parse(screenData.JSONscreenVariables)
	return (
		<header className="sticky top-0 z-20 flex items-center justify-between p-5 pr-8 mx-auto max-w-7xl">
			<motion.div
				initial={{ x: -250, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="flex items-center space-x-2"
			>
				<Link
					href="https://github.com/tyranosaure"
					target="_blank"
					className="flex justify-center items-center rounded-full bg-gray-600 text-2xl p-3 border-4 border-black/20 hover:bg-[#F05032] transition duration-300"
					aria-label="Link to my github profile"
				>
					<BsGithub />
				</Link>
				<Link
					href="https://www.linkedin.com/in/bassouayoub/"
					target="_blank"
					className="flex justify-center items-center rounded-full bg-gray-600 text-2xl p-3 border-4 border-black/20 hover:bg-[#0F61BA] transition duration-300"
					aria-label="Link to my linkedin profile"
				>
					<TfiLinkedin />
				</Link>
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
					<a
						className="hover:bg-[#F7AB0A] rounded-full transition duration-300 flex items-center hover:text-slate-700 border-4 border-transparent hover:border-black/20"
						aria-label="Link to the contact me section"
					>
						<p className="hidden px-5 py-3 text-sm font-bold uppercase md:inline-flex">{contact[lang]}</p>
					</a>
				</Link>
				<div className="relative ml-3 w-14 h-14">
					<Image
						src={lang === "fr" ? FrFlag : EnFlag}
						fill={true}
						alt="Change language"
						onClick={() => setLang(lang === "fr" ? "eng" : "fr")}
						className="transition duration-300 border-4 border-opacity-25 rounded-full cursor-pointer border-white/20 hover:border-white/60"
						aria-label="Change language from French to English or vice versa"
					/>
				</div>
			</motion.div>
		</header>
	)
}

export default Header
