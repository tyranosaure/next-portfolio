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
			className="h-[100lvh] flex relative flex-col text-center md:text-left xl:flex-row md:max-w-[2000px] xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto pr-4 overflow-hidden"
		>
			<div className="flex-1 my-24 flex flex-col space-y-10 items-center justify-center">
				<h4 className="text-3xl sm:text-4xl font-semibold mx-4 text-center">{Parse(screenName[lang])}</h4>
				<div className="space-y-4">
					{/* <div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-2xl">{phone}</p>
					</div> */}
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-2xl">{email}</p>
					</div>
				</div>
				{/* <form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-full px-4 sm:max-w-4xl"
				>
					<div className="flex flex-col sm:flex-row space-x-0 space-y-2 sm:space-y-0 sm:space-x-2">
						<input
							className="contactInput sm:flex-1"
							type="text"
							placeholder="Name"
							{...register("name", { required: true })}
						/>
						<input
							className="contactInput sm:flex-1"
							placeholder="Email"
							type="email"
							{...register("email", { required: true })}
						/>
					</div>
					<input
						className="contactInput"
						placeholder="Subject"
						type="text"
						{...register("subject")}
					/>
					<textarea
						className="contactInput"
						placeholder="Message"
						{...register("message", { required: true })}
					/>
					<button
						type="submit"
						className="bg-[#F7AB0A] hover:bg-[#a77508] py-5 px-10 rounded-md text-black transition-all font-bold text-lg"
					>
						{buttonText[lang]}
					</button>
				</form> */}
			</div>
		</motion.div>
	)
}

export default ContactMe
