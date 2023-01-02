import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"

function Header() {
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
					fgColor="white"
					bgColor="gray"
				/>
				<SocialIcon
					className="cursor-pointer"
					url="https://github.com/tyranosaure"
					fgColor="white"
					bgColor="gray"
				/>
			</motion.div>
			<Link
				href="#contact"
				legacyBehavior={true}
			>
				<motion.div
					initial={{ x: 250, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					className="flex flex-row items-center text-gray-300 cursor-pointer"
				>
					<SocialIcon
						className="cursor-pointer"
						network="email"
						fgColor="white"
						bgColor="gray"
					/>
					<p className="uppercase px-5 hidden md:inline-flex text-sm">Get in touch</p>
				</motion.div>
			</Link>
		</header>
	)
}

export default Header
