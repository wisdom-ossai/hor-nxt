const DonationSection = () => (
    <section className="donation-section" style={{backgroundImage: 'url(images/background/3.jpg)'}}>
        <div className="auto-container">
            <div className="row clearfix">
                <div className="title-column col-md-6 col-sm-12 col-xs-12">
                    <div className="inner-column">
                        <h2>We are Charity, Our Mission to protect people & the planet, Our activities <br />are taken around the world</h2>
                    </div>
                    </div>

                    <div className="progress-column col-md-6 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <div className="row clearfix">
                                <div className="progress-block col-md-4 col-sm-4 col-xs-12">
                                    <div className="inner-box">
                                        <div className="graph-outer">
                                            <input type="text" className="dial" data-fgcolor="#ffffff" data-bgcolor="#ba3b2a" data-width="125" data-height="125" data-linecap="normal" value="90" />
                                                <div className="inner-text count-box"><span className="count-text" data-stop="90" data-speed="2000"></span>Food</div>
                                    </div>
                                        </div>
                                    </div>

                                    <div className="progress-block col-md-4 col-sm-4 col-xs-12">
                                        <div className="inner-box">
                                            <div className="graph-outer">
                                                <input type="text" className="dial" data-fgcolor="#ffffff" data-bgcolor="#ba3b2a" data-width="125" data-height="125" data-linecap="normal" value="75" />
                                                    <div className="inner-text count-box"><span className="count-text" data-stop="75" data-speed="2000"></span>Cloth</div>
                                    </div>
                                            </div>
                                        </div>

                                        <div className="progress-block col-md-4 col-sm-4 col-xs-12">
                                            <div className="inner-box">
                                                <div className="graph-outer">
                                                    <input type="text" className="dial" data-fgcolor="#ffffff" data-bgcolor="#ba3b2a" data-width="125" data-height="125" data-linecap="normal" value="60" />
                                                        <div className="inner-text count-box"><span className="count-text" data-stop="60" data-speed="2000"></span>Other</div>
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </section>
);

export default DonationSection;