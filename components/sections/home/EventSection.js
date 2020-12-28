import Link from "next/link";

const EventSection = () => (
    <section className="event-section">
        <div className="title-box" style={{backgroundImage: "url(images/background/2.jpg)"}}>
            <div className="auto-container">
                <div className="sec-title light text-center">
                    <h2>UpComing Events</h2>
                </div>
            </div>
        </div>

        <div className="content-box">
            <div className="auto-container">
                <div className="event-carousel owl-carousel owl-theme">
                    <div className="event-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image"><Link href="/event"><a><img src="images/resource/event-1.jpg" alt="" /></a></Link></div>
                                    <span className="date"><strong>04</strong>May</span>
                                </div>
                                <div className="lower-content">
                                    <ul className="info">
                                        <li><i className="fa fa-clock-o"></i>at 5.00 pm - 7.30 pm</li>
                                        <li><i className="fa fa-map-marker"></i>25 Newyork City</li>
                                    </ul>
                                <h3><Link href="/event"><a>Help volunteer to poor children Education</a></Link></h3>
                                </div>
                            </div>
                        </div>
                    <div className="event-block">
                            <div className="inner-box">
                                <div className="image-box">
                                <div className="image"><Link href="/event"><a><img src="images/resource/event-2.jpg" alt="" /></a></Link></div>
                                        <span className="date"><strong>04</strong>May</span>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="info">
                                            <li><i className="fa fa-clock-o"></i>at 5.00 pm - 7.30 pm</li>
                                            <li><i className="fa fa-map-marker"></i>25 Newyork City</li>
                                        </ul>
                                <h3><Link href="/event"><a>Food camp for childran in Africa</a></Link></h3>
                                    </div>
                                </div>
                            </div>
                    <div className="event-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                <div className="image"><Link href="/event"><a><img src="images/resource/event-3.jpg" alt="" /></a></Link></div>
                                            <span className="date"><strong>04</strong>May</span>
                                        </div>
                                        <div className="lower-content">
                                            <ul className="info">
                                                <li><i className="fa fa-clock-o"></i>at 5.00 pm - 7.30 pm</li>
                                                <li><i className="fa fa-map-marker"></i>25 Newyork City</li>
                                            </ul>
                                <h3><Link href="/event"><a>Green Organization to Founded</a></Link></h3>
                                        </div>
                                    </div>
                                </div>
                    <div className="event-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                <div className="image"><Link href="/event"><a><img src="images/resource/event-1.jpg" alt="" /></a></Link></div>
                                                <span className="date"><strong>04</strong>May</span>
                                            </div>
                                            <div className="lower-content">
                                                <ul className="info">
                                                    <li><i className="fa fa-clock-o"></i>at 5.00 pm - 7.30 pm</li>
                                                    <li><i className="fa fa-map-marker"></i>25 Newyork City</li>
                                                </ul>
                                <h3><Link href="/event"><a>Help volunteer to poor children Education</a></Link></h3>
                                            </div>
                                        </div>
                                    </div>
                    <div className="event-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                <div className="image"><Link href="/event"><a><img src="images/resource/event-2.jpg" alt="" /></a></Link></div>
                                                    <span className="date"><strong>04</strong>May</span>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="info">
                                                        <li><i className="fa fa-clock-o"></i>at 5.00 pm - 7.30 pm</li>
                                                        <li><i className="fa fa-map-marker"></i>25 Newyork City</li>
                                                    </ul>
                                <h3><Link href="/event"><a>Food camp for childran in Africa</a></Link></h3>
                                                </div>
                                            </div>
                                        </div>

                    <div className="event-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <div className="image"><Link href="/event"><a><img src="images/resource/event-3.jpg" alt="" /></a></Link></div>
                                                        <span className="date"><strong>04</strong>May</span>
                                                    </div>
                                                    <div className="lower-content">
                                                        <ul className="info">
                                                            <li><i className="fa fa-clock-o"></i>at 5.00 pm - 7.30 pm</li>
                                                            <li><i className="fa fa-map-marker"></i>25 Newyork City</li>
                                                        </ul>
                                                        <h3><Link href="/event"><a>Green Organization to Founded</a></Link></h3>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="link-box">
                    <Link href="/events"><a className="theme-btn btn-style-four">More Event</a></Link>
                                        </div>
                                    </div>
                                </div>
    </section>
);

export default EventSection;