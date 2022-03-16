import './css/Footer.css';

import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-bar'>
                <div className='help'>Apua</div>
                <div className='about'>Tietoa</div>
                <div>Ota yhteyttä</div>
            </div>

            <div className='lower-footer'>
                <div className='border'>
                    <div><div><p>Tämä on footer. Tämä näkyy kaikilla sivuilla.</p></div>
                    <div><p><AiOutlineCopyright/> Projektiryhmä Q</p></div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;