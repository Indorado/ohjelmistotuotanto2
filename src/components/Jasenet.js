import React from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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

          <Container>
            <div>
                <h2>Selaa jäseniä</h2>
                <p className='text'>Tutustu muihin rekisteröityneisiin käyttäjiin!</p>
            </div>
            <div className='browse-users'>
              <div className="card" style={{maxWidth: 200}}>
                <img className="card-img-top" src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg" alt=""></img>
                <div className="card-body">
                  <h4 className="card-title">Matti Matkailija</h4>
                  <p className="text">*Esittely*</p>
                  <p className="text">*Paikkakunta*</p>
                </div>
              </div>
              <div className="card" style={{maxWidth: 200}}>
                <img className="card-img-top" src="https://p0.piqsels.com/preview/965/429/207/avatar-people-person-business.jpg" alt=""></img>
                <div className="card-body">
                  <h4 className="card-title">Erkki Esimerkki</h4>
                  <p className="text">*Esittely*</p>
                  <p className="text">*Paikkakunta*</p>
                </div>
              </div>
            </div>
          </Container>

          <div>
            <SignedUser/>
          </div>
        </div>
        
    )
}

export default Jasenet;
