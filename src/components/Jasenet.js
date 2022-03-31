import { React, useState } from "react";

import {
  Modal,
  Card,
  CardImg,
  ModalBody, Image
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BsGeoAlt } from "react-icons/bs";

import SignedUser from '../modules/SignedUser';
import './css/Jasenet.css';

const Jasenet = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col>
                <h1 className='header-text'>Jäsenet</h1>
                <p className='text'>Selaa harrasteporukkamme käyttäjiä!</p>
                <Link to="/OmatMatkat"><button type="button" className="btn btn-secondary">Omat matkat</button></Link>
                <Link to="/OmatTiedot"><button type="button" className="btn btn-outline-secondary" style={{margin: 5}}>Omat tiedot</button></Link>
              </Col>
              <Col xs={4}><img className="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
            </Row>  
          </Container>

        <hr></hr>
        <Users/>
  
        <div>
          <SignedUser/>
        </div>

        
      </div>
      
        
    )
}

const Users = () => {
  const [showUser, setShowUser] = useState(false);
  const handleCloseCard = () => setShowUser(false);
  const showUserCard = () => setShowUser(!showUser);

  return (
    <div>
      <Container className="browse-users"
        style={{ maxHeight: 1000 }}
      >
        <Card
          className="user-card"
          style={{ cursor: "pointer", maxWidth: 200 }}
          onClick={showUserCard}
        >
          <CardImg
            className="user-img"
            variant="top"
            src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg"
          ></CardImg>
          <Card.Body>
            <h4 className="card-title">Etunimi Sukunimi</h4>
            <p className="location">
              <BsGeoAlt /> Paikkakunta, Maa
            </p>
          </Card.Body>
        </Card>

        <Card
          className="user-card"
          style={{ maxWidth: 200 }}
        >
          <CardImg
            className="user-img"
            variant="top"
            src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg"
          ></CardImg>
          <Card.Body>
            <h4 className="card-title">Matti Matkailija</h4>
            <p className="text">*Esittely*</p>
            <p className="text">*Paikkakunta*</p>
          </Card.Body>
        </Card>

        <Card
          className="user-card"
          style={{ maxWidth: 200 }}
        >
          <CardImg
            className="user-img"
            variant="top"
            src="https://p0.piqsels.com/preview/965/429/207/avatar-people-person-business.jpg"
          ></CardImg>
          <Card.Body>
            <h4 className="card-title">Erkki Esimerkki</h4>
            <p className="text">*Esittely*</p>
            <p className="text">*Paikkakunta*</p>
          </Card.Body>
        </Card>
        
        <>
        <Modal show={showUser} onHide={handleCloseCard}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Etunimi Sukunimi</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <div className="user-card-big">
              <Image style={{maxWidth: 250, border: '1px solid black'}} src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg"></Image>
              <div className="user-card-info">
                <p>Etunimi Sukunimi</p>
                <p className="user-card-location"><BsGeoAlt /> Paikkakunta, Maa</p>
              </div>
            </div>
            <p className="user-pres">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis risus ut turpis sollicitudin, vitae consectetur massa scelerisque. Proin id augue quam. Fusce eget dictum turpis, at varius nunc. Nunc non ligula sed elit rutrum lacinia.......</p>
            
          </ModalBody>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCloseCard}
            >
              Poistu
            </button>
          </Modal.Footer>
        </Modal>
        </>
      </Container>
    </div>
  )
}

export default Jasenet;
