import './css/Footer.css';
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap';

import { AiOutlineCopyright } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
/*Modalit ei toimi oikein*/
const Footer = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleCloseInfo = () => setShowInfo(false);
    const handleCloseContact = () => setShowContact(false);

    const showInfoModal = () => setShowInfo(!showInfo);
    const showContactModal = () => setShowContact(!showContact);

    return (
        <div className="footer">
            <div className='footer-bar'>
                <div className="help" style={{paddingLeft: 12}}>
                    <OverlayTrigger placement='top' overlay={
                        <Popover id="popover-basic">
                            <PopoverBody>Apua ei ole saatavilla.</PopoverBody>
                        </Popover>
                    }>
                    <button type="button" className="btn btn-light" style={{ color: 'rgb(80,80,80)' }}>Apua</button>
                    </OverlayTrigger>
                </div>
                    <div className='about' > <button type="button" className="btn btn-light" onClick={showInfoModal} style={{ color: 'rgb(80,80,80)' }}>Tietoa</button></div>
                <div className='contact'><button type="button" className="btn btn-light" onClick={showContactModal} style={{ color: 'rgb(80,80,80)' }}>Ota yhteyttä</button></div>
            </div>
                
            <div className='lower-footer'><p><AiOutlineCopyright/> Projektiryhmä Q</p></div>

            <>
            <Modal show={showInfo} onHide={handleCloseInfo}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Tietoa</h4></Modal.Title>
                </Modal.Header>
                <p style={{ marginTop: 15, marginLeft: 10 }}>Tämä web-sovellus on tehty Ohjelmistotuotanto II -kurssia varten.</p>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleCloseInfo}>Sulje</button>
                </Modal.Footer>
            </Modal>
            </>

            <>
            <Modal show={showContact} onHide={handleCloseContact}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Ota yhteyttä</h4></Modal.Title>
                </Modal.Header>
                <div style={{ marginTop: 15, marginLeft: 10 }}>
                    <p >Hätätilanteessa ota keksi.</p>
                    <p><BsEnvelope/> tahantoimiva@osoite.fi</p>
                </div>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleCloseContact}>Sulje</button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}

export default Footer;