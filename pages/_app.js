// import App from 'next/app'

import { ThemeProvider } from "@emotion/react"
import Footer from "@hor/components/Footer"
import GlobalStyles from "@hor/components/GlobalStyles/GlobalStyles"
import Header from "@hor/components/Header"

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
                <div className="preloader"></div>
            <Component {...pageProps} />
            <Footer />
            </ThemeProvider>
            </>)
}
export default MyApp