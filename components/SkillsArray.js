import { BsGithub } from "react-icons/bs"
import { DiPostgresql, DiCss3, DiHtml5, DiJavascript1, DiJava } from "react-icons/di"
import { FaNode, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiFirebase, SiVercel, SiMysql } from "react-icons/si"
import { BsGit } from "react-icons/bs"

const SkillsArray = [
	{
		name: "HTML",
		icon: <DiHtml5 />,
		color: "text-[#E34F26]",
		backgroundColor: "bg-[#6e240f]",
		fontSize: "text-6xl",
		gridPosition: "col-star-2 col-end-3 row-star-1 row-end-2",
	},
	{
		name: "CSS",
		icon: <DiCss3 />,
		color: "text-[#1572B6]",
		backgroundColor: "bg-[#09395c]",
		fontSize: "text-6xl",
		gridPosition: "col-star-3 col-end-4 row-star-1 row-end-2",
	},
	{
		name: "JavaScript",
		icon: <DiJavascript1 />,
		color: "text-[#F7DF1E]",
		backgroundColor: "bg-[#8c7f14]",
		fontSize: "text-6xl",
		hoverFontSize: "text-xs",
		gridPosition: "col-star-1 col-end-2 row-star-2 row-end-3",
	},
	{
		name: "React",
		icon: <FaReact />,
		color: "text-[#61DAFB]",
		backgroundColor: "bg-[#295f6e]",
		fontSize: "text-6xl",
		gridPosition: "col-star-2 col-end-3 row-star-2 row-end-3",
	},
	{
		name: "Next.js",
		icon: <SiNextdotjs />,
		color: "text-white",
		backgroundColor: "bg-black",
		fontSize: "text-9xl",
		borderColor: "border-white/70",
		gridPosition: "col-star-3 col-end-4 row-star-2 row-end-3",
	},
	{
		name: "Node.js",
		icon: <FaNode />,
		color: "text-[#61944B]",
		backgroundColor: "bg-[#324d26]",
		fontSize: "text-6xl",
		gridPosition: "col-star-4 col-end-5 row-star-2 row-end-3",
	},
	{
		name: "MySQL",
		icon: <SiMysql />,
		color: "text-[#085D86]",
		backgroundColor: "bg-[#043045]",
		fontSize: "text-6xl",
		borderColor: "border-[#085D86]/40",
		gridPosition: "col-star-1 col-end-2 row-star-3 row-end-4",
	},
	{
		name: "Git",
		icon: <BsGit />,
		color: "text-[#D64331]",
		backgroundColor: "bg-[#782319]",
		fontSize: "text-5xl",
		gridPosition: "col-star-2 col-end-3 row-star-3 row-end-4",
	},
	{
		name: "Firebase",
		icon: <SiFirebase />,
		color: "text-[#FFCA28]",
		backgroundColor: "bg-[#8c6f15]",
		fontSize: "text-5xl",
		gridPosition: "col-star-3 col-end-4 row-star-3 row-end-4",
	},
	{
		name: "Vercel",
		icon: <SiVercel />,
		color: "text-black",
		backgroundColor: "bg-white",
		fontSize: "text-4xl",
		gridPosition: "col-star-4 col-end-5 row-star-3 row-end-4",
	},
	{
		name: "PostgreSQL",
		icon: <DiPostgresql />,
		color: "text-[#336791]",
		backgroundColor: "bg-[#1c3a52]",
		fontSize: "text-7xl",
		hoverFontSize: "text-xs",
		borderColor: "border-[#336791]/40",
		gridPosition: "col-star-2 col-end-3 row-star-4 row-end-5",
	},
	{
		name: "Java",
		icon: <DiJava />,
		color: "text-[#DA8136]",
		backgroundColor: "bg-[#7d491d]",
		fontSize: "text-6xl",
		gridPosition: "col-star-3 col-end-4 row-star-4 row-end-5",
	},
]

export default SkillsArray
