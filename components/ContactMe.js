import React from "react"
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm } from "react-hook-form"
import Parse from "html-react-parser"

function ContactMe({ screenData, lang }) {
	const { screenName, JSONscreenVariables } = screenData
	const { phone, email, buttonText } = JSON.parse(JSONscreenVariables)
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => {
		window.location.href = `mailto:abassou642@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="border-b-4 screenContainer border-black/10"
		>
			<div className="flex flex-col items-center justify-center flex-1 my-24 space-y-10">
				<h4 className="mx-4 text-3xl font-semibold text-center sm:text-4xl">{Parse(screenName[lang])}</h4>
				<div className="space-y-4">
					<div className="flex flex-col items-center justify-center space-x-5 md:flex-row">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-2xl">{email}</p>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default ContactMe
