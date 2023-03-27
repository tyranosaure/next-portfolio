import "styles/globals.scss"
import "styles/backgroundStyles.scss"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	)
}

export default MyApp
