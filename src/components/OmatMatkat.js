import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Mainos from '../modules/Mainos';
import './css/OmatMatkat.css';
import {
  Modal,
  Form,
  Card,
  CardImg,
  ModalBody,
  FormCheck
} from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
//import Create from "../components/create"; TIETOKANTAAN LIITTYVÄ IMPORT

const OmatMatkat = () => {
  return (
    <div>
      <Container className="hero">
        <Row>
          <Col xs={4} md={4}>
            <h1 className='header-text'>Omat matkat</h1>
            <p className='text'>Jaa matkakertomuksesi kuvin ja tarinoin väritettynä muille käyttäjille!  Määritä matkakertomuksesi yksityisyys ja nauti tuoreina pysyvistä matkamuistoista!</p>

            { /*<Buttons />*/}
            <LuoUusiMatka />

          </Col>
          <Col></Col>
          <Col xs={4}><img class="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
        </Row>
      </Container>

      <hr></hr>

      <Container>
        <div>
          <h2>Selaa omia matkoja</h2>
          <p className='text'>Selaa itse lisäämiäsi matkakohteita ja uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiisi!</p>
          <Row>
            <Cards />
          </Row>
        </div>
      </Container>

      <hr></hr>
      <div>
        <Mainos />
      </div>

      <hr></hr>
      <div className='sign-up'>
        <div>
          <p>Olitko matkoilla? Haluatko jakaa matkakertomuksesi muille käyttäjille tai vaikka vain itsellesi?</p>
          <p>Alla olevasta napista pääset nopeasti tallentamaan unohtumattoman matkakertomuksesi!</p>
        </div>
        <div>
          <Button variant="secondary">Tallenna matkasi!</Button>
        </div>
      </div>

      <hr></hr>
    </div>
  )
}


//Lisää uusi matkakohde -napin klikkaus + modaali
const LuoUusiMatka = () => {

  //Lisää
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const showAddDestination = () => setShowAdd(!showAdd);

  //Muokkaa
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const showDestinationEdit = () => setShowEdit(!showEdit);

  //Poista
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showDestinationDelete = () => setShowDelete(!showDelete);

  return (
    <div>
      <Button className='AddTrip' variant="secondary"
        onClick={showAddDestination}>Lisää uusi matka</Button>

      <> {/*Modaali Aukaise */}
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Lisää matkakohde</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Form.Group>
              <p>Lisää matkan tiedot sekä matkakertomus.</p>              
              <Form.Control as="textarea" rows={7}
                maxLength={250} placeholder="Matkakertomus"
                style={{ marginBottom: 5 }}>                
                </Form.Control>

                <p>Haluatko pitää matkasi julkisena vai yksityisenä?</p>
                <FormCheck id="flexCheckDefault" label="Julkinen"/>
                <FormCheck id="flexCheckDefault" label="Yksityinen"/>
            </Form.Group>
          </ModalBody>          

          <ModalBody>
            <div className="card-btns">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={showDestinationEdit}
              >
                Muokkaa matkakohdetta
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={showDestinationDelete}
              >
                Poista matkakohde
              </button>
            </div>
          </ModalBody>

        </Modal>
      </>

      <>
        {/*Matkan muokkaus napin takana ->
         aukaisee erillisen modaalin*/}
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Muokkaa</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Form>
              <Form.Group>
                {/*KUVIEN LISÄYKSEN KOODI TÄHÄN*/}
                <p>Kuvan muokkaus</p>
                <Form.Control as="textarea" rows={7}
                  maxLength={250} placeholder="Matkakohteen kuvaus"
                  style={{ marginBottom: 5 }}></Form.Control>
              </Form.Group>
            </Form>
            <Row>
              <div className="card-btns">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseEdit}
                >
                  Tallenna muutokset
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleCloseEdit}
                >
                  Peruuta
                </button>
              </div>
            </Row>
          </ModalBody>
        </Modal>
      </>

      <>
        {/*Matkan POISTO napin takana 
        -> aukaisee erillisen modaalin*/}
        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Poistetaanko matkakohde?</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <p>Oletko varma, että haluat poistaa matkakohteen?</p>
            <Row>
              <div className="card-btns">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseDelete}
                >
                  Poista
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleCloseDelete}
                >
                  Peruuta
                </button>
              </div>
            </Row>
          </ModalBody>

        </Modal>
      </>
      {/*Omat tiedot -sivulle vievä nappi*/}
      <button type="button" onClick={(e) => {        
        e.preventDefault();
        window.location.href = 'http://localhost:3000/OmatTiedot';
      }} class="btn btn-outline-secondary" style={{ marginLeft: 2 }}>Omat tiedot</button>

    </div>
  )

}

const Cards = () => {
  //tässä näytä vain käyttäjän omat matkakohteet
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
            className="destination-img"
            variant="top"
            src="https://imgur.com/ARX301s.png"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Kohdenimi</h4>
            <p className="location">
              <BsGeoAlt /> Paikkakunta, Maa
            </p>
          </Card.Body>
        </Card>

        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="destination-img"
            variant="top"
            src="https://imgur.com/0j1r0KT.png"
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
            className="destination-img"
            variant="top"
            src="https://imgur.com/ARX301s.png"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">Koli</h4>
            <p className="location">
              <BsGeoAlt /> Lieksa, Suomi
            </p>
          </Card.Body>
        </Card>

        {/*Moodali: aukaise, muokkaa, poista*/}
        <>
          <Modal show={showCard} onHide={handleCloseCard}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Puijon torni</h4>
              </Modal.Title>
            </Modal.Header>
            <ModalBody>
              <Image style={{ maxWidth: 465 }} src="https://imgur.com/0j1r0KT.png" ></Image>
              <p></p>
              <p>Matkakohteen kuvaus</p>
              <p className="location">
                <BsGeoAlt /> Paikkakunta, Maa
              </p>

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
    </div>
  )
}
export default OmatMatkat;
