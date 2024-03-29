import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { client } from "services/sanity"
import { motion } from "framer-motion"
import { ArrowUpIcon } from "@heroicons/react/24/solid"

import About from "components/About"
import ContactMe from "components/ContactMe"
import Header from "components/Header"
import Hero from "components/Hero"
import Projects from "components/Projects"
import Skills from "components/Skills"
import WorkExperience from "components/WorkExperience"

export default function Home({ hero, projects, experiences, navigation, screens, skills }) {
	const [lang, setLang] = useState("fr")

	return (
		<main className="bg-[rgb(36,36,36)] text-white h-[100dvh] snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 scroll-smooth transition duration-150">
			<Head>
				<title>Ayoub Bassou's Portfolio</title>
				<meta
					name="description"
					content="Ayoub Bassou's Portfolio - Full Stack Developer. Here you can find my projects, skills, and work experience."
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</Head>
			<Header
				lang={lang}
				setLang={setLang}
				screenData={screens.filter((screen) => screen.title === "Header")[0]}
			/>
			<section
				id="hero"
				className="snap-start"
			>
				<Hero
					hero={hero}
					navigation={navigation}
					lang={lang}
					screenData={screens.filter((screen) => screen.title === "Hero")[0]}
				/>
			</section>

			<section
				id="about"
				className="snap-start md:snap-center solid-back"
			>
				<About
					lang={lang}
					screenData={screens.filter((screen) => screen.title === "About me")[0]}
				/>
			</section>

			<section
				id="experience"
				className="snap-center"
			>
				<WorkExperience
					experiences={experiences}
					screenData={screens.filter((screen) => screen.title === "Experiences")[0]}
					lang={lang}
				/>
			</section>

			<section
				id="skills"
				className="snap-center"
			>
				<Skills
					screenData={screens.filter((screen) => screen.title === "Skills")[0]}
					lang={lang}
					skills={skills}
				/>
			</section>

			<section
				id="projects"
				className="polka snap-center"
			>
				<Projects
					projects={projects}
					screenData={screens.filter((screen) => screen.title === "Projects")[0]}
					lang={lang}
				/>
			</section>

			<section
				id="contact"
				className="solid-back snap-center"
			>
				<ContactMe
					screenData={screens.filter((screen) => screen.title === "Contact")[0]}
					lang={lang}
				/>
			</section>

			<motion.footer
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				transition={{ duration: 1 }}
				className="sticky bottom-0 z-50 flex items-center justify-center py-5"
			>
				<Link
					href="#hero"
					className="bg-[#cc8e08] hover:bg-blue-500 border-4 border-black/20 rounded-full transition duration-300"
					aria-label="Back to top"
				>
					<ArrowUpIcon className="h-[50px] w-[50px] rounded-full text-black hover:text-white p-[10px] transition duration-300" />
				</Link>
			</motion.footer>
		</main>
	)
}

export async function getStaticProps() {
	const hero = await client.fetch(`*[_type == "hero"]`)
	const navigation = await client.fetch(`*[_type == "navigation"]`)
	const projects = await client.fetch(`*[_type == "project"]`)
	const experiences = await client.fetch(`*[_type == "experience"]`)
	const screens = await client.fetch(`*[_type == "screens"]`)
	const skills = await client.fetch(`*[_type == "skills"]`)

	return {
		props: {
			hero,
			projects,
			experiences,
			navigation,
			screens,
			skills,
		},
	}
}
