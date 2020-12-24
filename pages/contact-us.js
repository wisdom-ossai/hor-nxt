import { ContactForm, ContactInfo } from '@hor/components/sections/contact';
import { PageTitle } from '@hor/components/shared';


const ContactUs = () => (
    <>
        <PageTitle titleHead="Our Services" bgImage="34.jpg" />

        <ContactInfo />
        <ContactForm />
    </>
)

export default ContactUs;