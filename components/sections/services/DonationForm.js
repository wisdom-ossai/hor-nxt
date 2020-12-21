const DonationForm = () => (
    <section className="donation-form-section style-three">
        <div className="auto-container">
            <div className="donation-form">
                <form method="post" action="http://t.commonsupport.xyz/incles/index-2.html">
                    <div className="row clearfix">
                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                            <input type="radio" name="one-time" id="one-time" />
                            <label for="one-time">One Time</label>
                            <input type="radio" name="one-time" id="recurring" />
                            <label for="recurring">Recurring</label>
                        </div>

                        <div className="form-group col-md-3 col-sm-12 col-xs-12">
                            <h4>I Want to Donate for</h4>
                            <select className="custom-select-box">
                                <option>Educated Childrens</option>
                                <option>Educated Childrens</option>
                                <option>Educated Childrens</option>
                                <option>Educated Childrens</option>
                            </select>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <h4>Currency</h4>
                            <select className="custom-select-box">
                                <option>USD , Us dollers</option>
                                <option>USD , Us dollers</option>
                                <option>USD , Us dollers</option>
                                <option>USD , Us dollers</option>
                                <option>USD , Us dollers</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4 col-sm-6 col-xs-12">
                            <h4>How much do you want to donate?</h4>
                            <select className="custom-select-box">
                                <option>$1200</option>
                                <option>$1000</option>
                                <option>$800</option>
                                <option>$500</option>
                                <option>$100</option>
                            </select>
                        </div>

                        <div className="form-group col-md-2 col-sm-12 col-xs-12 btn-box">
                            <button type="submit" className="theme-btn btn-style-six">Donate Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

export default DonationForm;