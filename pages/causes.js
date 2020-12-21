import { CallToAction, DonationForm, GridContainerSection } from '@hor/components/sections/causes';
import { PageTitle } from '@hor/components/shared';


const CausesPage = () => (
    <>
        <PageTitle titleHead="Our Causes" bgImage="19.jpg" />

        <GridContainerSection />
        <DonationForm />
        <CallToAction />
    </>
)

export default CausesPage;