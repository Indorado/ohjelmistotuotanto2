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
                <Link to="/OmatMatkat"><button type="button" class="btn btn-secondary">Omat matkat</button></Link>
                <Link to="/OmatTiedot"><button type="button" class="btn btn-outline-secondary" style={{margin: 5}}>Omat tiedot</button></Link>
              </Col>
              <Col xs={4}><img class="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
            </Row>  
          </Container>

          <hr></hr>

          <Container>
            <div>
                <h2>Selaa jäseniä</h2>
                <p className='text'>Tutustu muihin rekisteröityneisiin käyttäjiin!</p>
            </div>
            <div className='browse-users'>
              <div class="card" style={{maxWidth: 200}}>
                <img class="card-img-top" src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg" alt=""></img>
                <div class="card-body">
                  <h4 class="card-title">Matti Matkailija</h4>
                  <p class="text">*Esittely*</p>
                  <p class="text">*Paikkakunta*</p>
                </div>
              </div>
              <div class="card" style={{maxWidth: 200}}>
                <img class="card-img-top" src="https://p0.piqsels.com/preview/965/429/207/avatar-people-person-business.jpg" alt=""></img>
                <div class="card-body">
                  <h4 class="card-title">Erkki Esimerkki</h4>
                  <p class="text">*Esittely*</p>
                  <p class="text">*Paikkakunta*</p>
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
