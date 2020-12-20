import Head from 'next/head';
import Link from 'next/link';
import { PageTitle } from '@hor/components/shared';
import { FunFactsSection, TeamSection, VolunteerAction, WhoWeAreSection } from '@hor/components/sections/about';


const AboutPage = () => (
    <>
        <PageTitle titleHead="About Us" bgImage="13.jpg" />

        <VolunteerAction />
        <TeamSection />
        <FunFactsSection />
        <WhoWeAreSection />
    </>
)

export default AboutPage;