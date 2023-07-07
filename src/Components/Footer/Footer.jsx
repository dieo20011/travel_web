import React, {useEffect} from "react";
import './footer.css';
import video2 from '../../Assets/video2.mp4';
import {FiSend, FiChevronRight} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);
    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter email Address"/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                           SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div data-aos="fade-up" className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="abc" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/>Travel .
                                </a>
                        </div>
                        <div className="footerParagraph">
                        A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.
                        </div>
                        <div className="footerSocials">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>
                <div className="footerLinks grid">
                    <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Service
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Tourism
                            
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Payment
                            
                        </li>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Bookings
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Rentcars
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            HotelWorld
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Trivago
                            
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            TripAdvisior
                            
                        </li>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            LonDon
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            California
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Indonesia
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Philippin
                            
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            France
                            
                        </li>
                    </div>

                </div>
                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED - XEO 2023</small>
                </div>

                </div>
            </div>
            
        </section>
    )
}
export default Footer;