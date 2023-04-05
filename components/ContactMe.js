import React from "react"
import { motion } from "framer-motion"
import Parse from "html-react-parser"
import { FaLinkedinIn } from "react-icons/fa"
import { BiMailSend } from "react-icons/bi"
import { AiFillCheckCircle } from "react-icons/ai"
import { RiCloseFill } from "react-icons/ri"
import Link from "next/link"
import { useState } from "react"

function ContactMe({ screenData, lang }) {
	const { screenName, JSONscreenVariables } = screenData
	const { email, successMessage } = JSON.parse(JSONscreenVariables)
	const [showCopySuccess, setShowCopySuccess] = useState(false)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative border-b-4 screenContainer border-black/10"
		>
			<div className="flex flex-col items-center justify-center flex-1 my-24 space-y-10">
				<h4 className="mx-4 text-3xl font-semibold text-center sm:text-4xl">{Parse(screenName[lang])}</h4>
				<div className="flex space-x-4">
					<Link
						href="https://www.linkedin.com/in/bassouayoub/"
						className="p-4 text-4xl bg-slate-700 hover:bg-blue-500 rounded-full border-[6px] border-black/30 transition-all duration-300 ease-in-out"
					>
						<FaLinkedinIn />
					</Link>
					<span
						onClick={() => {
							navigator.clipboard.writeText(email)
							setShowCopySuccess(true)
						}}
						className="p-4 text-4xl bg-slate-700 hover:bg-[#CD4D3D] rounded-full border-[6px] border-black/30 transition-all duration-300 ease-in-out cursor-pointer"
					>
						<BiMailSend />
					</span>
				</div>
			</div>
			{showCopySuccess && (
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="absolute flex items-center py-3 pl-4 pr-3 bg-green-700 border-4 rounded-full border-black/30 bottom-24"
				>
					<span className="font-bold">{successMessage[lang]}</span>
					<RiCloseFill
						onClick={() => setShowCopySuccess(false)}
						className="ml-3 text-3xl transition rounded-full cursor-pointer hover:bg-white/30"
					/>
				</motion.div>
			)}
		</motion.div>
	)
}

export default ContactMe
