import React from "react"
import { motion } from "framer-motion"
import { useIsSmall } from "styles/stylesfunction"

const BackgroundCircles = ({ children }) => {
	const isSmall = useIsSmall()

	return (
		<>
			{isSmall ? (
				children
			) : (
				<motion.div
					animate={{ scale: [1, 1.5, 1.25, 1.75, 1], rotate: ["25deg", "-25deg", "380deg", "0deg"] }}
					transition={{ duration: 3 }}
					className="relative flex justify-center items-center"
				>
					<div className="absolute border-2 border-t-[12px] border-l-[12px] border-white/10 bg-[#1D1D1D] rounded-full h-[80dvh] w-[80dvh] ml-0 mt-0 animate-spin-slow" />
					<div className="absolute border-2 border-r-[12px] border-b-[12px] border-[#F7AB0A] bg-[#F7AB0A]/25  rounded-full h-[60dvh] w-[60dvh] animate-spin-slow opacity-20 mb-10" />
					<div className="absolute border-4 border-t-[12px] border-r-[12px] bg-[#F7AB0A]/70 rounded-full h-[40dvh] w-[40dvh] animate-spin-slow" />
					{children}
				</motion.div>
			)}
		</>
	)
}

export default BackgroundCircles
