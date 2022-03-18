import React from 'react';

import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import Mainos from '../modules/Mainos';
import './css/Koti.css';

const Koti = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col>
                <h1 className='header-text'>Kuopion kulkijat</h1>
                <p className='text'>Kuopion kulkijat on kuopiolainen harrasteporukka. Käyttäjämme voivat tallentaa matkakertomuksiaan, esitellä uusia matkakohteita ja tutustua toisten matkakertomuksiin.</p>
                <Buttons/>
              </Col>
              <Col>
                <Image class="img-fluid" src="https://imgur.com/r5cDrZd.png"></Image>
              </Col>
            </Row>  
          </Container>


          <hr></hr>

          <Container className='promo'>
            <Col className='item'>
              <h2>Kirjautuneena käyttäjänä</h2>
              <p className='text'>Kirjautuneena käyttäjänä koet enemmän Kuopion Kulkijoiden web-sovelluksessa!</p>
            </Col>
              <Col>
                <Row className='text'>
                  <Col>
                    <h4><IoMdCheckmarkCircleOutline/> Matkakohteet</h4>
                    <p >Voit lisätä, poistaa, päivittää ja selata matkakohteita.</p>
                  </Col>
                  <Col>
                    <h4><IoMdCheckmarkCircleOutline/> Porukan matkat</h4>
                    <p>Voit selata porukan matkoja ja niihin liitettyjä kuvia ja tarinoita!</p>
                  </Col>
                  <Col>
                    <h4><IoMdCheckmarkCircleOutline/> Omat matkat</h4>
                    <p>Voit kertoa omasta matkastasi ja lisätä matkaan tarinoita ja kuvia!</p>
                  </Col>
                </Row>
              </Col>
          </Container>

          <div>
            <Mainos />
          </div>

          <div className='sign-up'>
            <div>
              <p>Etkö ole vielä rekisteröitynyt Kuopion Kulkijoiden sovellukseen?</p>
              <p>Rekisteröidy heti alla olevan painikkeen avulla!</p>
            </div>
            <div>
              <Button variant="secondary">Rekisteröidy</Button>
            </div>
          </div>
          
          <hr></hr>
        </div>
    )
}

/*const Picture = () => {
  return (
    
  )
}*/

const Buttons = () => {
  return (
    <div className="buttons">
      <Button className='btn-in' variant="secondary">Kirjaudu</Button>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray'}}>Rekisteröidy</Button>
    </div>
  )
}

export default Koti;
