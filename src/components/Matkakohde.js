import { React, useState } from "react";
import {
  Modal,
  ModalBody
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Create from "../components/create";
import RecordList from "../components/recordList";
import Mainos from '../modules/Mainos';
import AdSaveTrip from '../modules/parts/AdSaveTrip';

import "./css/Matkakohde.css";

//import SingleFileUploadComponent from "../components/single-file-upload.component";
// BsGeo, BsGlobe
//  Popover, PopoverBody, FloatingLabel

const Matkakohde = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} md={4}>
            <h1 className="header-text">Matkakohteet</h1>
            <p className="text">
              Väritä omia matkakertomuksia kuvin ja tarinoin. Voit myös uppoutua
              muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita
              seuraavalle matkallesi!
            </p>
            <div>
                <Link to="/PorukanMatkat">
                  <button type="button" className="btn btn-secondary">
                    Selaa käyttäjien matkoja
                  </button>
              </Link>
              <Link to="/OmatTiedot">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ margin: 5 }}
                >
                  Omat matkat
                </button>
              </Link>
            </div>
          </Col>
          <Col></Col>
          <Col xs={4}>
            <img
              className="img-fluid"
              src="https://imgur.com/uHy4z87.png"
              alt=""
            ></img>
          </Col>
        </Row>
      </Container>
      <hr></hr>

      <Container>
        <div>
          <Row className="mb-3">
            <Col xs={4}>
              <h2>Selaa matkakohteita</h2>
              <p className="text">
                Selaa kirjautuneiden käyttäjien lisäämiä matkakohteita ja
                uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiin!
              </p>
              <Buttons />
            </Col>
          </Row>
          <RecordList/>
        </div>
      </Container>

      <hr></hr>
          <Mainos/>
          <hr></hr>
          <AdSaveTrip/> 
    </div>
  );
};


const Buttons = () => {
  return (
    <div className="destination-btn">
      <Row>
        <AddDestination />
      </Row>
    </div>
  );
};



// MATKAKOHTEEN LISÄYS
const AddDestination = () => {
  
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const showAddDestination = () => setShowAdd(!showAdd);

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={showAddDestination}
      >
        Lisää matkakohde
      </button>

      <>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Lisää matkakohde</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Create/>
          </ModalBody>
          <Modal.Footer>
            <button className="btn btn-outline-secondary" onClick={handleCloseAdd}>Poistu</button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Matkakohde;
