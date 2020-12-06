import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display</link>=swap" rel="stylesheet" />
                    <link href="/css/bootstrap.css" rel="stylesheet" />
                    <link href="/plugins/revolution/css/settings.css" rel="stylesheet" type="text/css" />
                    <link href="/plugins/revolution/css/layers.css" rel="stylesheet" type="text/css" />
                    <link href="/plugins/revolution/css/navigation.css" rel="stylesheet" type="text/css" />
                    <link href="/css/style.css" rel="stylesheet" />
                    <link href="/css/responsive.css" rel="stylesheet" />

                    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
                    <link rel="icon" href="images/favicon.png" type="image/x-icon" />
                    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width,</meta> initial-scale=1.0, maximum-scale=1.0, user-scalable=0" /> */}
                </Head>
                <body>
                    <div className="page-wrapper">
                        {/* <div className="preloader"></div> */}
                        <Main />
                        <NextScript />
                    </div>
                    <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-double-up"></span></div>
                    <script src="/js/jquery.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
                    <script src="/plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.actions.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.migration.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
                    <script src="/plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
                    <script src="/js/main-slider-script.js"></script>
                    <script src="/js/jquery-ui.js"></script>
                    <script src="/js/jquery.fancybox.js"></script>
                    <script src="/js/owl.js"></script>
                    <script src="/js/wow.js"></script>
                    <script src="/js/knob.js"></script>
                    <script src="/js/appear.js"></script>
                    <script src="/js/script.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument