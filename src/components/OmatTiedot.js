import React, { useState } from 'react';

import {
  Modal,
  Card,
  CardImg,
  ModalBody, Image
} from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
//import { Card } from "react-bootstrap";

import { BsTrash } from "react-icons/bs";

import SignedUser from '../modules/SignedUser';
import './css/OmatTiedot.css';

// Max merkkimäärä toimii, mutta laskuri puuttuu
const OmatTiedot = () => {
    return (
        <div>
          <Container className="hero">
        <Row>
          <Col>
            <h1 className='header-text'>Omat tiedot</h1>
            <p className='text'>Muista pitää tietosi ajantasalla!</p>
            <Link to="/Matkakohde"><button type="button" className="btn btn-secondary">Matkakohteet</button></Link>
            <Link to="/OmatMatkat"><button type="button" className="btn btn-outline-secondary" style={{margin: 5}}>Omat matkat</button></Link>
          </Col>
          <Col xs={4}><img className="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
        </Row>
      </Container>


      <hr></hr>
      <Information/>

          <div>
            <SignedUser/>
          </div>
        </div>
    )
}

const Counter = () => {
  const [ characterCount, setCharacterCount ] = useState(0);
  if (characterCount < 250) {
    return (
      <div>
        <Form.Group>
          <Form.Control as="textarea" rows={5} maxLength={250} controlId="formGridPresentation" placeholder="Käyttäjän esittely" onChange={(e) => setCharacterCount(e.target.value.length)}></Form.Control>
          <p className='counter-text'> {characterCount}/ 250</p>
        </Form.Group>
      </div>
    )
  } else {
    return (
    <div>
      <Form.Group>
        <Form.Control as="textarea" rows={5} maxLength={250} controlId="formGridPresentation" placeholder="Käyttäjän esittely" onChange={(e) => setCharacterCount(e.target.value.length)}></Form.Control>
        <p className='counter-text-alert'> {characterCount}/ 250 Merkkimäärä täynnä!</p>
      </Form.Group>
    </div>
  )
  }
}

const Information = () => {
  const [showSave, setShowSave] = useState(false);
  const handleCloseSave = () => setShowSave(false);
  const showSaveChanges = () => setShowSave(!showSave);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showDeletePicture = () => setShowDelete(!showDelete);

  const [showChange, setShowChange] = useState(false);
  const handleCloseChange = () => setShowChange(false);
  const showChangePicture = () => setShowChange(!showChange);

  return (
    <div>
      <>
                <Container className="user-info">
            <Form>
              <Row >
                <Form.Group as={Col}>
                  <h2 className='header-text'>*Käyttäjän nimi*</h2>
                  <Form.Group>
                    <Counter/> 
                  </Form.Group>

                  <Form.Group>
                    <Row><h5>Omat tiedot</h5></Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Etunimi</Form.Label>
                        <Form.Control placeholder="*Etunimi*" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Sukunimi</Form.Label>
                        <Form.Control placeholder="*Sukunimi*" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} xs={3} controlId="formGridZip">
                        <Form.Label>Postinumero</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Postitoimipaikka</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Maa</Form.Label>
                        <Form.Select defaultValue="Valitse">
                          <option disabled>Valitse</option>
                          <option>Suomi</option>
                          <option>Ulkomailla</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                  </Form.Group>
                  <button type="button" className="btn btn-secondary" onClick={showSaveChanges}>Tallenna muutokset</button>
                </Form.Group>

                <Form.Group as={Col} xs={4} className="picture">
                  <div className="card" >
                    <img as={Col} className="card-img-top img-fluid" src="https://p0.piqsels.com/preview/965/429/207/avatar-people-person-business.jpg" alt="" style={{ padding: 2 }}></img>
                    <div>
                      <button type="button" className="btn btn-outline-secondary" style={{ margin: 5 }} onClick={showChangePicture}>Vaihda kuva</button>
                      <button type="button" className="btn btn-outline-secondary" style={{ margin: 5 }} onClick={showDeletePicture}><BsTrash/></button>
                    </div>
                  </div>
                </Form.Group>
              </Row>
            </Form>
          </Container>

          <Modal show={showSave} onHide={handleCloseSave}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Omat tiedot</h4>
              </Modal.Title>
            </Modal.Header>
            <ModalBody>
              <p className="text">Tallennetaanko muutokset?</p>
              <button type="button" className="btn btn-secondary">Tallenna muutokset</button>
              <button type="button" className="btn btn-outline-secondary" style={{marginLeft: 5}} onClick={handleCloseSave}>Peruuta</button>
              
            </ModalBody>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleCloseSave}
              >
                Poistu
              </button>
            </Modal.Footer>
          </Modal>

          <Modal show={showChange} onHide={handleCloseChange}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Omat tiedot</h4>
              </Modal.Title>
            </Modal.Header>
            <ModalBody>
              <p>*TÄHÄN KUVAN VALITSEMINEN*</p>
              <p className="text">Tallenetaanko muutokset?</p>
              <button type="button" className="btn btn-secondary">Tallenna muutokset</button>
              <button type="button" className="btn btn-outline-secondary" style={{marginLeft: 5}} onClick={handleCloseChange}>Peruuta</button>
              
            </ModalBody>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleCloseChange}
              >
                Poistu
              </button>
            </Modal.Footer>
          </Modal>

          <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Omat tiedot</h4>
              </Modal.Title>
            </Modal.Header>
            <ModalBody>
              <p className="text">Poistetaanko kuva?</p>
              <button type="button" className="btn btn-secondary">Kyllä</button>
              <button type="button" className="btn btn-outline-secondary" style={{marginLeft: 5}} onClick={handleCloseDelete}>Peruuta</button>
              
            </ModalBody>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleCloseDelete}
              >
                Poistu
              </button>
            </Modal.Footer>
          </Modal>
        </>
    </div>
  )
}

export default OmatTiedot;