import React from 'react';

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

          <Container className="user-info">
            <Form>
              <Row >
                <Form.Group as={Col}>
                  <h2 className='header-text'>*Käyttäjän nimi*</h2>
                  <Form.Group>
                    <Form.Control as="textarea" rows={5} maxLength={3} controlId="formGridPresentation" placeholder="Käyttäjän esittely"></Form.Control>
                    <p className='counter-text'> / 250</p>
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
                  <button type="button" className="btn btn-secondary">Tallenna muutokset</button>
                </Form.Group>

                <Form.Group as={Col} xs={4} className="picture">
                  <div className="card" >
                    <img as={Col} className="card-img-top img-fluid" src="https://p0.piqsels.com/preview/965/429/207/avatar-people-person-business.jpg" alt="" style={{ padding: 2 }}></img>
                    <div>
                      <button type="button" className="btn btn-outline-secondary" style={{ margin: 5 }}>Vaihda kuva</button>
                      <button type="button" className="btn btn-outline-secondary" style={{ margin: 5 }}><BsTrash/></button>
                    </div>
                  </div>
                </Form.Group>
              </Row>
            </Form>
          </Container>

          <div>
            <SignedUser/>
          </div>
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