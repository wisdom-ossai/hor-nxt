// import App from 'next/app'

import { ThemeProvider } from "@emotion/react"
import GlobalStyles from "../components/GlobalStyles/GlobalStyles"
import Header from "../components/Header"

const theme = {
    color: {
        primary: '#ff3030'
    }
}
function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
            <Header />
            <Component {...pageProps} />

            </ThemeProvider>
            </>)
}
export default MyApp