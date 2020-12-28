import Link from "next/link";

const VideoSection = () => (
    <section className="video-section">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="content-column pull-right col-md-6 col-sm-12 col-xs-12">
                    <div className="inner-column">
                        <div className="sec-title">
                            <h2>Welcome to House of Restoration <small><em>(Saved to Save)</em></small></h2>
                            <div className="text">Phosfluorescently expedite impactful supply chains via focused results. Holistically generate open-source applications through bleeding-edge sources. Compellingly supply just in time catalysts for change through top-line potentialities.</div>
                        </div>
                        <div className="link-box"><Link href="/about"><a className="theme-btn btn-style-four">Read More</a></Link></div>
                    </div>
                </div>

                <div className="video-column col-md-6 col-sm-12 col-xs-12">
                    <div className="inner-column wow fadeInLeft">
                        <figure className="image"><img src="images/resource/image-2.jpg" alt="" />
                            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="link" data-fancybox="gallery" data-caption=""><span className="icon fa fa-play"></span></a>
                        </figure>
                    </div>
                    </div>
                </div>
            </div>
    </section>
);

export default VideoSection;