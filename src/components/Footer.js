import {FooterLi} from "./FooterLi";

export const Footer = () => {
    return(
        <>
        <footer className="footer1">
            <div className="container1">
                <div className="row1">

                    {/*<div className="footer1-col">*/}
                    {/*    <a href="#" className="logo">*/}
                    {/*        /!*<img src="#" />*!/*/}
                    {/*    </a>*/}
                    {/*    <div className="social-links">*/}
                    {/*        <a href="#" target="_blank"><i*/}
                    {/*            className="fab fa-facebook-f"></i></a>*/}
                    {/*        <a href="#" target="_blank"><i*/}
                    {/*            className="fab fa-twitter"></i></a>*/}
                    {/*        <a href="#" target="_blank"><i*/}
                    {/*            className="fab fa-instagram"></i></a>*/}
                    {/*        <a href="#" target="_blank"><i*/}
                    {/*            className="fab fa-linkedin-in"></i></a>*/}
                    {/*    </div>*/}
                    {/*    <p>Copyright © 2022 All rights reserved.</p>*/}
                    {/*</div>*/}

                    {/*<div className="footer1-col">*/}
                    {/*    <h4>Contacts</h4>*/}
                    {/*    <ul>*/}
                    {/*        <li className="footer_li"><a href="https://goo.gl/maps/ugHHHDNP8coz8QSJA" target="_new">B/50,*/}
                    {/*            Sundram Society, VIP Road, Behind Bright School, Karelibaug, Vadodara - 390018, Gujarat,*/}
                    {/*            INDIA</a></li>*/}
                    {/*        <li className="footer_li">+91 9875219004</li>*/}
                    {/*        <li className="footer_li">sales@neionpharmatech.com</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}


                    <div className="footer1-col">
                        <h4>About</h4>
                        <ul>
                            <FooterLi link="#" item="Contact Us"/>
                            <FooterLi link="#" item="About Us"/>
                            <FooterLi link="#" item="Career"/>
                        </ul>
                    </div>
                    <div className="footer1-col">
                        <h4>Help</h4>
                        <ul>
                            <FooterLi link="#" item="Payment"/>
                            <FooterLi link="#" item="Shipping"/>
                            <FooterLi link="#" item="Cancellation & Return"/>
                            <FooterLi link="#" item="FAQ"/>
                            <FooterLi link="#" item="Complain"/>
                        </ul>
                    </div>
                    <div className="footer1-col">
                        <h4>Policy</h4>
                        <ul>
                            <FooterLi link="#" item="Return Policy"/>
                            <FooterLi link="#" item="Terms of Use"/>
                            <FooterLi link="#" item="Security"/>
                            <FooterLi link="#" item="Privacy"/>
                            <FooterLi link="#" item="EPR Compliance"/>
                        </ul>
                    </div>
                    <div className="footer1-col">
                        <h4>Socila</h4>
                        <ul>
                            <FooterLi link="#" item="Facebook"/>
                            <FooterLi link="#" item="Instagram"/>
                            <FooterLi link="#" item="Twitter"/>
                            <FooterLi link="#" item="YouTube"/>
                        </ul>
                    </div>
                    <div className="footer1-col">
                        <h4>Mail Us</h4>
                        <ul>
                            <li className="footer_li">Ecommerce Internet Private Limited,
                                Buildings Alyssa, Begonia &
                                Clove Embassy Tech Village,
                                Outer Ring Road, Devarabeesanahalli Village,
                                Bengaluru, 560103,
                                Karnataka, India</li>
                        </ul>
                    </div>
                </div>

                {/*<div className="row credits">*/}
                {/*    <div className="col-md-12">*/}
                {/*        <center>Made by <a href="https://www.linkedin.com/in/divyank-shah-9b790419a/" target="_new">Divyank*/}
                {/*            Shah</a></center>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </footer>
        </>
    )
}