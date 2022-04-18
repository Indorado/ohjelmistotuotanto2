import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './css/PorukanMatkat.css';
import SignedUser from '../modules/SignedUser';
import {
  Modal,
  Card,
  CardImg,
  ModalBody, Image
} from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";


const PorukanMatkat = () => {
  return (
    <div>
      <Container className="hero">
        <Row>
          <Col xs={4} md={4}>
            <h1 className='header-text'>Porukan matkat</h1>
            <p className='text'>Voit uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
            <Buttons />
          </Col>
          <Col></Col>
          <Col xs={4}><img className="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
        </Row>
      </Container>

      <hr></hr>

      <Container>
        <div>
          <h2>Selaa matkoja</h2>
          <p className='text'>Selaa kirjautuneiden käyttäjien lisäämiä matkakertomuksia ja uppoudu kuvin ja tarinoin väritettyihin matkoihin!</p>
        </div>
        <Cards />
      </Container>
      <div>
        <SignedUser />
      </div>
    </div>
  )
}

{/*Matkakortit*/ }
const Cards = () => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);
  const showDestinationCard = () => setShowCard(!showCard);

  return (
    <div>
      <div
        className="browse-destinations"
        style={{ maxHeight: 1000 }}
      >
        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="matkakohdeKuva"
            variant="top"
            src="https://i.imgur.com/HLe65jQ.jpeg"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Koli</h4>
            <p className="location">
              <BsGeoAlt /> Lieksa, Suomi
            </p>
          </Card.Body>
        </Card>

        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="matkakohdeKuva"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Puijo_tower.jpg"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Puijon torni</h4>
            <p className="location">
              <BsGeoAlt /> Kuopio, Suomi
            </p>
          </Card.Body>
        </Card>

        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="matkakohdeKuva"
            variant="top"
            src="https://i.imgur.com/PxKqIxD.jpeg"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Kungsleden</h4>
            <p className="location">
              <BsGeoAlt /> Abisko, Ruotsi
            </p>
          </Card.Body>
        </Card>

        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="matkakohdeKuva"
            variant="top"
            src="https://i.imgur.com/s3XCmRk.jpeg"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Yosemite</h4>
            <p className="location">
              <BsGeoAlt /> California, USA
            </p>
          </Card.Body>
        </Card>

        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="matkakohdeKuva"
            variant="top"
            src="https://i.imgur.com/G8F812v.jpeg"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Renggloch</h4>
            <p className="location">
              <BsGeoAlt /> Luzern, Sveitsi
            </p>
          </Card.Body>
        </Card>

      </div>
      <>

        {/*Modal aukeaa kun korttia klikataan*/}
        <Modal show={showCard} onHide={handleCloseCard}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Puijon torni</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Image style={{ maxWidth: 465 }} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Puijo_tower.jpg" ></Image>
            <p></p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,
              sed eiusmod tempor incidunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquid ex ea
              commodi consequat. Quis aute iure reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa eserunt mollit anim id est laborum.</p>

            <p className="location">
              <BsGeoAlt /> Kuopio, Suomi
            </p>
            <div className="card-btns">

            </div>
          </ModalBody>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCloseCard}
            >
              Sulje
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )

}

const Buttons = () => {
  return (
    <div className="buttons">
      <button type="btn btn-secondary" onClick={(e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/OmatMatkat';
      }} className="btn btn-secondary" style={{ marginLeft: 2 }}>Omat matkat</button>


      <button type="button" onClick={(e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/Matkakohde';
      }} className="btn btn-outline-secondary" style={{ marginLeft: 2 }}>Matkatkohteet</button>
    </div>
  )
}

export default PorukanMatkat;

