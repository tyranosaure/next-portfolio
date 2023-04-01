import imageUrlBuilder from "@sanity/image-url"
import { createClient } from "next-sanity"

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2023-02-15",
	useCdn: false,
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
	return builder.image(source)
}

export { client, urlFor }
