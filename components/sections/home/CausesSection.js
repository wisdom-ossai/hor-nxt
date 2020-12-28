import Link from "next/link";

const CausesSection = () => (
    <section className="causes-section">
        <div className="auto-container">
            <div className="sec-title text-center">
                <h2>Recent Causes</h2>
                <div className="text">You can help lots of people by donating little.Leverage agile frameworks to provide a robust synopsis for <br /> Organically grow the holistic world view of disruptive innovation via workplace</div>
                </div>

                <div className="causes-carousel owl-carousel owl-theme">
                <div className="cause-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure><img src="images/resource/cause-1.jpg" alt="" /></figure>
                            <div className="overlay-box"><Link href="/cause"><a className="link">Donate Now</a></Link></div>
                        </div>
                                <div className="lower-content">
                            <h3><Link href="/cause"><a>Drought And Hunger</a></Link></h3>
                                    <div className="text">Integer et diam libero. Praesent  varius nisi. Nunc vCapitalize</div>
                                    <div className="progress-bar">
                                        <div className="bar-inner"><div className="bar progress-line" data-width="85"><div className="bar-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">0</span>%</div></div></div></div>
                                    </div>
                                </div>
                                <div className="info-box clearfix">
                            <Link href="/cause"><a className="raised">Raised: <span>$1000</span></a></Link>
                            <Link href="/cause"><a className="goal">Goal: <span>$11000</span></a></Link>
                                </div>
                            </div>
                        </div>
                <div className="cause-block">
                <div className="inner-box">
                    <div className="image-box">
                        <figure><img src="images/resource/cause-2.jpg" alt="" /></figure>
                <div className="overlay-box"><Link href="/cause"><a className="link">Donate Now</a></Link></div>
            </div>
                        <div className="lower-content">
                            <h3><Link href="/cause"><a>Save Poor People</a></Link></h3>
                            <div className="text">Integer et diam libero. Praesent  varius nisi. Nunc vCapitalize</div>
                            <div className="progress-bar">
                                <div className="bar-inner"><div className="bar progress-line" data-width="65"><div className="bar-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="65">0</span>%</div></div></div></div>
                            </div>
                        </div>
                        <div className="info-box clearfix">
                <Link href="/cause"><a className="raised">Raised: <span>$1200</span></a></Link>
                <Link href="/cause"><a className="goal">Goal: <span>$31000</span></a></Link>
                        </div>
                    </div>
                </div>
                <div className="cause-block">
                    <div className="inner-box">
                        <div className="image-box">
                                <figure><img src="images/resource/cause-3.jpg" alt="" /></figure>
                            <div className="overlay-box"><Link href="/cause"><a className="link">Donate Now</a></Link></div>
                        </div>
                        <div className="lower-content">
                            <h3><Link href="/cause"><a>Send Food To Middle East</a></Link></h3>
                            <div className="text">Integer et diam libero. Praesent  varius nisi. Nunc vCapitalize</div>
                            <div className="progress-bar">
                                <div className="bar-inner"><div className="bar progress-line" data-width="48"><div className="bar-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="48">0</span>%</div></div></div></div>
                            </div>
                        </div>
                        <div className="info-box clearfix">
                            <Link href="/cause"><a className="raised">Raised: <span>$5000</span></a></Link>
                            <Link href="/cause"><a className="goal">Goal: <span>$31000</span></a></Link>
                        </div>
                    </div>
                </div>

                <div className="cause-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure><img src="images/resource/cause-2.jpg" alt="" /></figure>
                            <div className="overlay-box"><Link href="/cause"><a className="link">Donate Now</a></Link></div>
                        </div>
                        <div className="lower-content">
                            <h3><Link href="/cause"><a>Save Poor People</a></Link></h3>
                            <div className="text">Integer et diam libero. Praesent  varius nisi. Nunc vCapitalize</div>
                            <div className="progress-bar">
                                <div className="bar-inner"><div className="bar progress-line" data-width="65"><div className="bar-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">0</span>%</div></div></div></div>
                            </div>
                        </div>
                        <div className="info-box clearfix">
                            <Link href="/cause"><a className="raised">Raised: <span>$1000</span></a></Link>
                            <Link href="/cause"><a className="goal">Goal: <span>$11000</span></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CausesSection;