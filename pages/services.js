import { DonationForm, ServiceList, TeamList, TestimonialList } from '@hor/components/sections/services';
import { PageTitle } from '@hor/components/shared';


const ServicesPage = () => (
    <>
        <PageTitle titleHead="Our Services" bgImage="14.jpg" />

        <ServiceList />

        <section className="video-section-two alternate" style={{backgroundImage: "url(images/resource/video-image-2.jpg)"}}>
        <div className="inner-box">
            <div className="content-box">
                <h4> Welcome to our International <br /> Charity Since 1985</h4>
                <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="link" data-fancybox="video" data-caption=""><span className="icon fa fa-play"></span></a>
            </div>
        </div>
    </section>

        <TeamList />
        <TestimonialList />
        <DonationForm />
    </>
)

export default ServicesPage;