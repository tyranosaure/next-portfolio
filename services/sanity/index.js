import React from "react"
import imageUrlBuilder from "@sanity/image-url"
import { createClient } from "next-sanity"

const client = createClient({
	projectId: "00eqf7sb",
	dataset: "production",
	apiVersion: "2023-02-15",
	useCdn: false,
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
	return builder.image(source)
}

export { client, urlFor }
