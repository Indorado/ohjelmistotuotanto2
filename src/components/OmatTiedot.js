import React from 'react';
import useState from 'react';

import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { Modal, Form } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
//import Image from 'react-bootstrap/Image'
//import { Card } from "react-bootstrap";

import { BsTrash } from "react-icons/bs";
import Mainos from '../modules/Mainos';
import './css/OmatTiedot.css';

// Max merkkimäärä toimii, mutta laskuri puuttuu
const OmatTiedot = () => {


    return (
        <div>
          <Container className="hero">
            <Row>
              <Col>
                <h1 className='header-text'>*Käyttäjän nimi*</h1>
                <Form.Group>
                  <Form.Control as="textarea" rows={5} maxLength={3} placeholder="Käyttäjän esittely"></Form.Control>
                  <p className='counter-text'> / 250</p>
                </Form.Group>
                <div>
                  <button type="button" class="btn btn-secondary">Muuta tietoja</button>
                  <Link to="/OmatTiedot"><button type="button" class="btn btn-outline-secondary" style={{margin: 5}}>Omat matkat</button></Link>
                </div>
                
              </Col>
              <Col>
          </Col>
              <Col className="picture">
                <div class="card" >
                  <img as={Col} class="card-img-top img-fluid" src="https://p0.piqsels.com/preview/965/429/207/avatar-people-person-business.jpg" alt="" style={{ padding: 2 }}></img>
                  <div>
                    <button type="button" class="btn btn-outline-secondary" style={{ margin: 5 }}>Vaihda kuva</button>
                    <button type="button" class="btn btn-outline-secondary" style={{ margin: 5 }}><BsTrash/></button>
                  </div>
                </div>
              </Col>
            </Row>  
          </Container>


          <hr></hr>

          <Container>
            <Row>
                <h2>Omat tiedot</h2>
            </Row>
            <Form>
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
              <button type="button" class="btn btn-secondary">Tallenna muutokset</button>
            </Form>
          </Container>

          <div>
            <Mainos />
          </div>

          <div className='sign-up'>
            <div>
              <p>Olitko matkoilla? Haluatko jakaa matkakertomuksesi muille käyttäjille tai vaikka vain itsellesi?</p>
              <p>Alla olevasta napista pääset nopeasti tallentamaan unohtumattoman matkakertomuksesi!</p>
            </div>
            <div>
              <button type="button" class="btn btn-secondary">Tallenna matkasi</button>
            </div>
          </div>
          
          <hr></hr>
        </div>
    )
}

/*
const Counter = () => {
  const [ characterCount, setCharacterCount ] = useState(0);
  return (
    <div>
        <textarea rows={3} maxLength={250} placeholder="Käyttäjän esittely" onChange={(e) => setCharacterCount(e.target.value.length)}></textarea>
        <p>Max length: {characterCount} / 250</p>
    </div>
  )
}*/
  /*<Form className="user-information">
                <Form.Group className="username">
                  <Form.Control placeholder="*käyttäjänimi*" disabled></Form.Control>
                </Form.Group>
                <Form.Group className="firstname">
                  <Form.Control placeholder="Erkki" disabled></Form.Control>
                </Form.Group>
                <Form.Group className="postalcode">
                  <Form.Control placeholder="70100" disabled></Form.Control>
                </Form.Group> 
                <Form.Group className="lastname">
                  <Form.Control placeholder="Esimerkki" disabled></Form.Control>
                </Form.Group> 
                <Form.Group className="postalarea">
                  <Form.Control placeholder="Kuopio" disabled></Form.Control>
                </Form.Group>
           </Form>
            <button as={Col} className="delete" type="button" class="btn btn-secondary" style={{ marginTop: 5 }}>Tallenna muutokset</button>
           
          </Container>*/

export default OmatTiedot;