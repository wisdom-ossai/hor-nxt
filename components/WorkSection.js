const WorkSection = () => (
    <section className="work-section">
        <div className="inner-container">
            <div className="row clearfix">
                <div className="work-block col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
                    <div className="inner-box" style={{backgroundImage: "url(images/resource/image-1.jpg)"}}>
                        <h3><a href="services.html">We Empower</a></h3>
                        <div className="text">We organize and execute skill acquisition programs, trainings and seminars to enable beneficiaries become more useful both to self and community</div>
                        <div className="btn-box"><a href="services.html" className="theme-btn btn-style-three">Read More</a></div>
                    </div>
                </div>

                <div className="work-block col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box" style={{backgroundImage: "url(images/resource/image-1.jpg)"}}>
                        <h3><a href="services.html">Give Scholarship</a></h3>
                        <div className="text">Provide financial and moral support to beneficiaries who are willing to further their education but lack the financial capabilities to do so.</div>
                        <div className="btn-box"><a href="services.html" className="theme-btn btn-style-three">Read More</a></div>
                    </div>
                </div>

                <div className="work-block col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="1200ms">
                    <div className="inner-box" style={{backgroundImage: "url(images/resource/image-1.jpg)"}}>
                        <h3><a href="services.html">Give Revival</a></h3>
                        <div className="text">Too many broken, wounded, lost and underpriviledged people out there. We find them, reach out to them and bring them into the great family of love.</div>
                        <div className="btn-box"><a href="services.html" className="theme-btn btn-style-three">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WorkSection;