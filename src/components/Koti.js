import React from 'react';

import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import Mainos from './/Mainos';
import './css/Koti.css';

const Koti = () => {
    return (
        <div>
          <Container >
            <Row>
              <Col>
                <h1 className='header-text'>Kuopion kulkijat</h1>
                <p className='text'>Kuopion kulkijat on kuopiolainen harrasteporukka. Käyttäjämme voivat tallentaa matkakertomuksiaan, esitellä uusia matkakohteita ja tutustua toisten matkakertomuksiin.</p>
                <Button className='btn-in' variant="secondary">Kirjaudu</Button>
                <Button variant="secondary" style={{ backgroundColor: 'lightgrey'}}>Rekisteröidy</Button>
              </Col>
             <Col><img className="picture" class="img-fluid" src="https://i.imgur.com/xAKTK73.jpg" alt="Kuva"></img></Col>
            </Row>  
          </Container>


          <hr></hr>

          <Container className='promo'>
            <Col className='item'>
              <h2 className='header-text'>Kirjautuneena käyttäjänä</h2>
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

export default Koti;
