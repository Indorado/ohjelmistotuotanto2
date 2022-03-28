import { React, useState} from "react";
import { Modal, Form, Card, CardImg, CardGroup, OverlayTrigger, Popover, PopoverBody, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BsGeoAlt,  } from "react-icons/bs";
// BsGeo, BsGlobe

import SignedUser from '../modules/SignedUser';
import './css/Matkakohde.css';

const Matkakohde = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col xs={4} md={4}>
                <h1 className='header-text'>Matkakohteet</h1>
                <p className='text'>Väritä omia matkakertomuksia kuvin ja tarinoin. Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                <div>
                  <button type="button" class="btn btn-secondary">Tallenna matkasi</button>
                  <Link to="/OmatTiedot"><button type="button" class="btn btn-outline-secondary" style={{margin: 5}}>Omat matkat</button></Link>
                </div>
              </Col>
              <Col></Col>
              <Col xs={4}><img class="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
            </Row>  
          </Container>

          <hr></hr>

          <Container>
            <div>
              <Row className="mb-3">
                <Col xs={4}>
                  <h2>Selaa matkakohteita</h2>
                  <p className='text'>Selaa kirjautuneiden käyttäjien lisäämiä matkakohteita ja uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiin!</p>
                  <Buttons/>
                </Col>
              </Row>

              
              <CardGroup className="browse-destinations" style={{maxHeight: 1000}}>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">*Tähän pitäisi avautua isompi kuva*</Tooltip>}>
                  <Card class="destination-card" style={{ cursor: "pointer", maxWidth: 200 }}>
                    <CardImg class="destination-img" variant="top" src="https://imgur.com/0j1r0KT.png"></CardImg>
                    <Card.Body>
                      <h4 class="destination">Puijon torni</h4>
                      <p class="location"><BsGeoAlt/> Kuopio, Suomi</p>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </CardGroup>
              

            </div>
          </Container>

          <div>
            <SignedUser/>
          </div>
        </div>
    )
}

/*const cardClick = () => {
  return (
    <div>
      
    </div>
  )
}*/

const Buttons = () => {
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const showAddDestination = () => setShowAdd(!showAdd);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const showEditDestination = () => setShowEdit(!showEdit);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showDeleteDestination = () => setShowDelete(!showDelete);

  return (
    <div  className="destination-btn">
      <button type="button" class="btn btn-outline-secondary" onClick={showAddDestination}>Lisää</button>
      <button type="button" class="btn btn-outline-secondary" onClick={showEditDestination}>Muokkaa</button>
      <button type="button" class="btn btn-outline-secondary" onClick={showDeleteDestination}>Poista</button>

      <>
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Lisää matkakohde</h4></Modal.Title>
        </Modal.Header>
        <p style={{ marginTop: 15, marginLeft: 10 }}>Tähän toiminnallisuutta</p>
        <Modal.Footer>
          <button type="button" class="btn btn-outline-secondary" onClick={handleCloseAdd}>Lisää matkakohde</button>
        </Modal.Footer>
      </Modal>
      </>

      <>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Muokkaa matkakohdetta</h4></Modal.Title>
        </Modal.Header>
        <p style={{ marginTop: 15, marginLeft: 10 }}>Tähän toiminnallisuutta</p>
        <Modal.Footer>
          <button type="button" class="btn btn-outline-secondary" onClick={handleCloseEdit}>Tallenna muutokset</button>
        </Modal.Footer>
      </Modal>
      </>

      <>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Poista matkakohde</h4></Modal.Title>
        </Modal.Header>
        <p style={{ marginTop: 15, marginLeft: 10 }}>Tähän toiminnallisuutta.</p>
        <Modal.Footer>
          <button type="button" class="btn btn-outline-secondary" onClick={handleCloseDelete}>Poista matkakohde</button>
        </Modal.Footer>
      </Modal>
      </>

    </div>
  )
}


export default Matkakohde;