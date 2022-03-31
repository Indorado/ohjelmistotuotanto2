import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import './css/Koti.css';
import AdSign from '../modules/parts/AdSignedUser';
import SignUp from '../modules/parts/AdSignUp';
import Mainos from '../modules/Mainos';
//import "bootstrap/dist/css/bootstrap.css";


const Koti = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const [showLogIn, setShowLogIn] = useState(false);

  const handleClose2 = () => setShowLogIn(false);
  const handleShow2 = () => setShowLogIn(true);

  const onLoginFormSubmit2 = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <Container className="hero">
        <Row>
          <Col xs={4} md={4}>
            <h1 className='header-text'>Kuopion kulkijat</h1>
            <p className='text'>Kuopion kulkijat on kuopiolainen harrasteporukka. Käyttäjämme voivat tallentaa matkakertomuksiaan, esitellä uusia matkakohteita ja tutustua toisten matkakertomuksiin.</p>
            <button onClick={handleShow2} type="button" className="btn btn-secondary">Kirjaudu</button>
            <button onClick={handleShow} type="button" className="btn btn-outline-secondary" style={{margin: 5}}>Rekisteröidy</button>
          </Col>
          <Col></Col>
          <Col xs={4}><img className="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
        </Row>
      </Container>

      <hr></hr>
      <div>
        <Mainos/>
      </div>
      <hr></hr>
      
      <AdSign/>
      <hr></hr>
      <SignUp/>
      
      <>

    
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rekisteröidy käyttäjäksi</Modal.Title>
          </Modal.Header>
          <p style={{ marginTop: '20px', marginLeft: '20px' }}>Täytä kentät huolellisesti. Kaikki kentät ovat pakollisia.</p>
          <Modal.Body>
            <LoginFormSignUp onSubmit={onLoginFormSubmit} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Sulje
            </Button>
          </Modal.Footer>
        </Modal>
      
      <Modal show={showLogIn} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Kirjaudu sisään</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginFormSignIn onSubmit={onLoginFormSubmit2} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Sulje
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      <hr></hr>
    </div>
  )
}

/*const Buttons = () => {
  return (
    <div className="buttons">
      <Button className='btn-in' variant="secondary">Kirjaudu</Button>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray' }}>Rekisteröidy</Button>
    </div>
  )
}*/

// KIRJAUDU:
const LoginFormSignIn = ({ onSubmit }) => {
  const [sposti, setSposti] = useState("");
  const [salasana, setSalasana] = useState("");

  const [salasanaError, setsalasanaError] = useState("");
  const [spostiError, setSpostiError] = useState("");

  
  const handleValidation = (event) => {
    let formIsValid = true;

    if (!sposti.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setSpostiError("Sähköpostiosoite ei kelpaa.");
      return false;
    } else {
      setSpostiError("");
      formIsValid = true;
    }

    if (!salasana.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setsalasanaError(
        "Vain kirjaimet ovat sallittuja ja salasanan vähimmäispituus on 8 merkkiä ja maksimipituus on 22 merkkiä."
      );
      return false;
    } else {
      setsalasanaError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit2 = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <Form onSubmit={loginSubmit2}>

           <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="sposti"
          placeholder="Sähköpostiosoite"
          value={sposti}
          onChange={(e) => setSposti(e.target.value)}
        />
        <small id="Help" className="text-danger form-text">
          {spostiError}
        </small>
      </Form.Group>

      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="salasana"
          placeholder="Salasana"
          value={salasana}
          onChange={(e) => setSalasana(e.target.value)}
        />
        <small id="passworderror" className="text-danger form-text">
          {salasanaError}
        </small>
      </Form.Group>
      <Button variant="primary" type="submit" block className="formBasic">
        Kirjaudu
      </Button>
      </Form>
  );
};

//REKISTERÖIDY:
const LoginFormSignUp = ({ onSubmit }) => {
  const [sposti, setSposti] = useState("");
  const [salasana, setSalasana] = useState("");
  const [nimimerkki, setNimimerkki] = useState("");
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");

  const [nimimerkkiError, setNimimerkkiError] = useState("");
  const [etunimiError, setEtunimiError] = useState("");
  const [sukunimiError, setSukunimiError] = useState("");
  const [salasanaError, setsalasanaError] = useState("");
  const [spostiError, setSpostiError] = useState("");

  const handleValidation = (event) => {
    
    let formIsValid = true;

    if (!nimimerkki.match(/^[a-zA-Z]{4,16}$/)) {
      formIsValid = false;
      setNimimerkkiError(
        "Vain kirjaimet ovat sallittuja ja nimimerkin vähimmäispituus on 4 merkkiä ja maksimipituus on 16 merkkiä."
      );
      return false;
    } else {
      setNimimerkkiError("");
      formIsValid = true;
    }

    if (!etunimi.match(/^[a-zA-Z]{2,15}$/)) {
      formIsValid = false;
      setEtunimiError(
        "Vain kirjaimet ovat sallittuja ja etunimen vähimmäispituus on 2 merkkiä ja maksimipituus on 16 merkkiä."
      );
      return false;
    } else {
      setEtunimiError("");
      formIsValid = true;
    }

    if (!sukunimi.match(/^[a-zA-Z]{2,16}$/)) {
      formIsValid = false;
      setSukunimiError(
        "Vain kirjaimet ovat sallittuja ja sukunimen vähimmäispituus on 2 merkkiä ja maksimipituus on 16 merkkiä."
      );
      return false;
    } else {
      setSukunimiError("");
      formIsValid = true;
    }

    if (!sposti.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setSpostiError("Sähköpostiosoite ei kelpaa.");
      return false;
    } else {
      setSpostiError("");
      formIsValid = true;
    }

    if (!salasana.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setsalasanaError(
        "Vain kirjaimet ovat sallittuja ja salasanan vähimmäispituus on 8 merkkiä ja maksimipituus on 22 merkkiä."
      );
      return false;
    } else {
      setsalasanaError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    /*<Form onSubmit={onSubmit}*/
    <Form onSubmit={loginSubmit}>

      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="nimimerkki"
          placeholder="Nimimerkki"
          value={nimimerkki}
          onChange={(e) => setNimimerkki(e.target.value)}
        />
                <small id="Help" className="text-danger form-text">
          {nimimerkkiError}
        </small>
      </Form.Group>

      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="etunimi"
          placeholder="Etunimi"
          value={etunimi}
          onChange={(e) => setEtunimi(e.target.value)}
        />
                <small id="Help" className="text-danger form-text">
          {etunimiError}
        </small>
      </Form.Group>


      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="sukunimi"
          placeholder="Sukunimi"
          value={sukunimi}
          onChange={(e) => setSukunimi(e.target.value)}
        />
                <small id="Help" className="text-danger form-text">
          {sukunimiError}
        </small>
      </Form.Group>

      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="sposti"
          placeholder="Sähköpostiosoite"
          value={sposti}
          onChange={(e) => setSposti(e.target.value)}
        />
        <small id="Help" className="text-danger form-text">
          {spostiError}
        </small>
      </Form.Group>

      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="salasana"
          placeholder="Salasana"
          value={salasana}
          onChange={(e) => setSalasana(e.target.value)}
        />
        <small id="passworderror" className="text-danger form-text">
          {salasanaError}
        </small>
      </Form.Group>

      <Form.Group controlId="formBasic" className="formBasic">
        <Form.Control
          type="salasana"
          placeholder="Vahvista salasana"
          value={salasana}
          onChange={(e) => setSalasana(e.target.value)}
        />
       
      </Form.Group>

      <Button variant="primary" type="submit" block className="formBasic">
        Rekisteröidy
      </Button>
    </Form>
  );
};


export { Koti }
