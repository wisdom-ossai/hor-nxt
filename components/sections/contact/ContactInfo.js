const ContactInfo = () => (
    <section className="contact-info-section">
        <div className="auto-container">
            <div className="row clearfix">

                <div className="info-block col-md-4 col-sm-6 col-xs-12">
                    <div className="inner-block">
                        <div className="icon-box wow zoomIn">
                            <span className="icon fa fa-map-marker"></span>
                        </div>
                        <div className="text">184 Collins Street West <br /> Victoria, United States, 8007</div>
                    </div>
                </div>

                <div className="info-block col-md-4 col-sm-6 col-xs-12">
                    <div className="inner-block">
                        <div className="icon-box wow zoomIn" data-wow-delay="300ms">
                            <span className="icon fa fa-phone"></span>
                        </div>
                        <div className="text">(+234) 816 830 5869 <br /> (+234) 806 279 1487</div>
                    </div>
                </div>

                <div className="info-block col-md-4 col-sm-6 col-xs-12">
                    <div className="inner-block">
                        <div className="icon-box wow zoomIn" data-wow-delay="600ms">
                            <span className="icon fa fa-envelope"></span>
                        </div>
                        <div className="text">info@houseofrestoration.com <br /> support@houseofrestoration.com</div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default ContactInfo;