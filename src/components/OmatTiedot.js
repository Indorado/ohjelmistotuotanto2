import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import Mainos from '../modules/Mainos';
import './css/OmatTiedot.css';

const OmatTiedot = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col>
                <h1 className='header-text'>*Käyttäjän nimi*</h1>
                <p className='text'>*Tähän käyttäjän esittely*</p>
                <Buttons/>
              </Col>
              <Col><Image class="img-fluid" src="https://imgur.com/r5cDrZd.png"></Image></Col>
            </Row>  
          </Container>


          <hr></hr>

          <Container>
            <div>
                <h2>Omat tiedot</h2>
                <p className='text'>*Tähän omat tiedot?*</p>
            </div>
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
              <Button variant="secondary">Tallenna matkasi!</Button>
            </div>
          </div>
          
          <hr></hr>
        </div>
    )
}

const Buttons = () => {
  return (
    <div className="buttons">
      <Button className='btn-in' variant="secondary">Muuta tietoja</Button>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray'}}>Omat matkat</Button>
    </div>
  )
}

export default OmatTiedot;
