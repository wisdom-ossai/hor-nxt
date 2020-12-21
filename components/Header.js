import styled from "@emotion/styled";
import Link from "next/link";
import Image from 'next/image'

const Header = () => (
    <header className="main-header">
        <div className="header-top">
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="top-left">
                        <ul className="contact-list clearfix">
                            <li><a href="#">hello@houseofrestoration.com</a></li>
                            <li>+234 816 830 5869,&nbsp;&nbsp; +234 806 279 1487</li>
                        </ul>
                    </div>
                    <div className="top-right clearfix">
                        <ul className="clearfix">
                            <li>Language ; </li>
                            <li className="language dropdownn"><a className="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="#">Eng <span className="icon fa fa-caret-down"></span></a>
                                <ul className="dropdown-menu style-one" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">Arabic</a></li>
                                    <li><a href="#">China</a></li>
                                    <li><a href="#">German</a></li>
                                    <li><a href="#">French</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-upper" style={{ background: '#e6e5e53b'}}>
            <div className="auto-container">
                <div className="logo-box">
                    <div className="logo"><a href="index-2.html"><Image
                        src="/images/logo.png"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    /></a></div>
                    </div>

                    <div className="nav-outer clearfix">
                    <nav className="main-menu">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/about"><a>About</a></Link></li>
                                <li><Link href="/causes"><a>Causes</a></Link></li>
                                <li><Link href="/events"><a>Events</a></Link></li>
                                <li><Link href="/services"><a>Services</a></Link></li>
                                <li><Link href="/team"><a>Team</a></Link></li>
                                </ul>
                            </div>
                        </nav>
                    <div className="outer-box">
                            <ul className="social-icon-one">
                                <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>

        <div className="sticky-header">
            <div className="auto-container clearfix">
                <div className="logo pull-left">
                    <a href="index-2.html" title=""><img src="images/logo.png" alt="" title="" width="80" /></a>
                </div>
                <div className="pull-right">
                    <nav className="main-menu">
                            <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/about"><a>About</a></Link></li>
                                <li><Link href="/causes"><a>Causes</a></Link></li>
                                <li><Link href="/events"><a>Events</a></Link></li>
                                <li><Link href="/services"><a>Services</a></Link></li>
                                <li><Link href="/team"><a>Team</a></Link></li>
                                </ul>
                            </div>
                        </nav>
                </div>
                </div>
            </div>
    </header>
);

export default Header;