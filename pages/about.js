import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout';


const AboutPage = () => (<Layout>
    <Head>
        <title>About Us</title>
    </Head>
    <h1>Welcom to About Page</h1>
    <Link href="/">
        <a>Back to home</a>
    </Link>
    </Layout>
)

export default AboutPage;