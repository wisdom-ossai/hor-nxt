const ContactForm = () => (
    <section class="contact-form-section">
        <div class="outer-container clearfix">

            <div class="form-column clearfix">
                <div class="inner-column">
                    <h2>Leave a Reply</h2>

                    <div class="contact-form">
                        <form method="post" action="http://t.commonsupport.xyz/incles/sendemail.php" id="contact-form">
                            <div class="row clearfix">
                                <div class="col-md-6 col-sm-12 col-xs-12 form-group">
                                    <input type="text" name="username" placeholder="Name" required />
                                </div>

                                <div class="col-md-6 col-sm-12 col-xs-12 form-group">
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form">Submit Now</button>
                                </div>

                            </div>
                        </form>

                    </div>
                    
                </div>
            </div>

            <div class="map-column">
                <div class="map-canvas"
                    data-zoom="12"
                    data-lat="-37.817085"
                    data-lng="144.955631"
                    data-type="roadmap"
                    data-hue="#ffc400"
                    data-title="Envato"
                    data-icon-path="images/icons/map-marker.png"
                    data-content="Melbourne VIC 3000, Australia<br /><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                </div>
            </div>

        </div>
    </section>
);

export default ContactForm;