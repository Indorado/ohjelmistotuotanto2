import './css/Footer.css';
import { Link } from 'react-router-dom';
import { Modal, Form } from "react-bootstrap";
import React, { useState } from "react";

import { AiOutlineCopyright } from "react-icons/ai";
/*Modalit ei toimi oikein*/
const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const showHelp = () => setShow(!show);
    const showInfo = () => setShow(!show);
    const showContact = () => setShow(!show);

    return (
        <div className="footer">
            <div className='footer-bar'>
                <p className='help' onClick={showHelp}>Apua</p>
                <div className='about' onClick={showInfo}>Tietoa</div>
                <div className="contact" onClick={showContact} style={{paddingLeft: 12}}>Ota yhteyttä</div>
            </div>

            <div className='lower-footer'>
                <div>
                    <p><AiOutlineCopyright/> Projektiryhmä Q</p>
                </div>
            </div>

            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apua</Modal.Title>
                </Modal.Header>
                <p style={{ marginTop: '20px', marginLeft: '20px' }}>Tähän tietoa.</p>
                <Modal.Footer>
                    <button type="button" variant="btn btn-secondary" onClick={handleClose}>Sulje</button>
                </Modal.Footer>
            </Modal>
            </>

            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tietoa</Modal.Title>
                </Modal.Header>
                <p style={{ marginTop: '20px', marginLeft: '20px' }}>Tämä web-sovellus on tehty Ohjelmistotuotanto II -kurssia varten.</p>
                <Modal.Footer>
                    <button type="button" variant="btn btn-secondary" onClick={handleClose}>Sulje</button>
                </Modal.Footer>
            </Modal>
            </>

            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ota yhteyttä</Modal.Title>
                </Modal.Header>
                <p style={{ marginTop: '20px', marginLeft: '20px' }}>Vikatilanteessa ota keksi.</p>
                <Modal.Footer>
                    <button type="button" variant="btn btn-secondary" onClick={handleClose}>Sulje</button>
                </Modal.Footer>
            </Modal>
            </>

        </div>
    )
}



export default Footer;