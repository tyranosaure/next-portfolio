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
		<header className="sticky top-0 p-5 pr-8 flex items-center justify-between max-w-7xl mx-auto z-20">
			<motion.div
				initial={{ x: -250, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 3.25 }}
				className="flex items-center space-x-2"
			>
				<Link
					href="https://github.com/tyranosaure"
					target="_blank"
					className="flex justify-center items-center rounded-full bg-gray-600 text-[24px] p-[11px] border-4 border-black/20 hover:bg-[#F05032] transition duration-300"
				>
					<BsGithub />
				</Link>
				<Link
					href="https://www.linkedin.com/in/bassouayoub/"
					target="_blank"
					className="flex justify-center items-center rounded-full bg-gray-600 text-[20px] p-[13px] border-4 border-black/20 hover:bg-[#0F61BA] transition duration-300"
				>
					<TfiLinkedin />
				</Link>
			</motion.div>

			<motion.div
				initial={{ x: 250, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 3.25 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<Link
					href="#contact"
					legacyBehavior={true}
				>
					<a className="hover:bg-[#F7AB0A] rounded-full transition duration-300 flex items-center hover:text-slate-700 border-4 border-transparent hover:border-black/20">
						<p className="uppercase px-5 py-3 hidden md:inline-flex text-sm font-bold">{contact[lang]}</p>
					</a>
				</Link>
				<Image
					src={lang === "fr" ? FrFlag : EnFlag}
					width="46"
					height="46"
					alt="Language"
					onClick={() => setLang(lang === "fr" ? "eng" : "fr")}
					className="box-border border-4 border-white/20 border-opacity-25 rounded-full cursor-pointer mx-3 hover:scale-[1.25] transition duration-300"
				/>
			</motion.div>
		</header>
	)
}

export default Header
