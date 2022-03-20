import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Mainos from '../modules/Mainos';
import './css/OmatMatkat.css';
import Dropdown from 'react-bootstrap/Dropdown'


//Johanna

const OmatMatkat = () => {
  return (
    <div>
      <Container className="hero">
        <Row>
          <Col>
            <h1 className='header-text'>Omat matkat</h1>
            <p className='text'>Jaa matkakertomuksesi kuvin ja tarinoin väritettynä muille käyttäjille!
              Määritä matkakertomuksesi yksityisyys ja nauti tuoreina pysyvistä matkamuistoista!</p>
            <Buttons />
          </Col>
          <Col><Image class="img-fluid" src="https://imgur.com/r5cDrZd.png"></Image></Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <div>
          <Row>
            <Col>
              <h2>Selaa omia matkoja</h2>
              <p className='text'>Selaa itse lisäämiäsi matkakohteita ja uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiisi!</p>
            </Col>

            <Col>
              {/*</DropDown>*/}
              <Dropdown>
                <p className='text'>Voit rajata hakua alla olevasta valikosta valitsemalla kohteen ja painamalla "Rajaa hakutulosta"-nappia.</p>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">Valitse matkakohde</Dropdown.Toggle>
                <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 7 }}>Rajaa hakutulosta</button>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Suomi</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Bulgaria</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Espanja</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            {/*kuvat tähän*/}
          </Row>
        </div>
      </Container>

      {/*Mainos*/}
      <div>
        <hr></hr>
        <Container>
          <Row>
            <Col>
              <h2>Tallenna omia matkakertomuksia</h2>
              <p className='text'>Määritä matkakertomuksesi yksityisyys ja väritä omia matkakertomuksia
               kuvin ja tarinoin! Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja
                etsiä inspiraatioita seuraavalle matkallesi!</p>
                <Buttons2/>
            </Col>
            <Col><img class="img-fluid" src="https://i.imgur.com/US0C0Lc.png" alt=""></img></Col>
          </Row>
          
        </Container>

        <hr></hr>
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
      <Button className='btn-in' variant="secondary">Lisää uusi matka</Button>
      <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 2 }}>Omat tiedot</button>
    </div>
  )
}

const Buttons2 = () => {
  return (
    <div className="btnMainos" >
      <p className="text">Tästä pääset muokkaamaan, lisäämään ja poistamaan luomiasia matkakohteita.</p>
      <button type="button" class="btn btn-outline-secondary">Muokkaa</button>
      
      <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 5 }}>Lisää</button>
     
      <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 5 }}>Poista</button>
    </div>
  )
}
export default OmatMatkat;
