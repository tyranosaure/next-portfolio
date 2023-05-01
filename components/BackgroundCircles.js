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
					animate={{ rotate: ["25deg", "-25deg", "360deg"] }}
					transition={{ duration: 1.5 }}
					className="relative flex items-center justify-center"
				>
					<div className="absolute border-2 border-t-[15px] border-l-[15px] border-white/10 bg-[#1D1D1D] rounded-full h-[80dvh] w-[80dvh] ml-0 mt-0 animate-spin-slow" />
					<div className="absolute border-2 border-b-[15px] border-r-[15px] border-orange-700 bg-orange-900  rounded-full h-[60dvh] w-[60dvh] animate-spin-slow mb-10" />
					<div className="absolute border-4 border-t-[15px] border-l-[15px] bg-yellow-600 rounded-full h-[40dvh] w-[40dvh] animate-spin-slow" />
					{children}
				</motion.div>
			)}
		</>
	)
}

export default BackgroundCircles
