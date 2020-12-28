import Link from "next/link";
const WhatWeDoSection = () => (
    <section className="what-we-do">
        <div className="auto-container">
            <div className="sec-title text-center">
                <h2>What we do</h2>
                <div className="text">Podcasting operational change management inside of workflows to establish a framework. Taking <br/> seamless key performance indicators offline ts</div>
                </div>

                <div className="row clearfix">
                <div className="service-block col-md-3 col-sm-6 col-xs-12 wow fadeIn">
                        <div className="inner-box">
                            <span className="icon flaticon-pay"></span>
                        <h4><Link href="/services"><a>Make Donation</a></Link></h4>
                            <div className="text">Keeping your eye on the ball while performing a deep</div>
                        </div>
                    </div>
                <div className="service-block col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-delay="400ms">
                        <div className="inner-box">
                            <span className="icon flaticon-system"></span>
                        <h4><Link href="/services"><a>Give Scholarship</a></Link></h4>
                            <div className="text">Keeping your eye on the ball while performing a deep</div>
                        </div>
                    </div>
                <div className="service-block col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-delay="800ms">
                        <div className="inner-box">
                            <span className="icon flaticon-tshirt"></span>
                        <h4><Link href="/services"><a>Become a Volunteer</a></Link></h4>
                            <div className="text">Keeping your eye on the ball while performing a deep</div>
                        </div>
                    </div>
                <div className="service-block col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <span className="icon flaticon-teamwork"></span>
                        <h4><Link href="/services"><a>Support Our Charity</a></Link></h4>
                            <div className="text">Keeping your eye on the ball while performing a deep</div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
);

export default WhatWeDoSection;