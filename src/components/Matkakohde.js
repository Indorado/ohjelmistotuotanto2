import React from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import {Dropdown} from 'react-bootstrap';
import { BsGeoAlt } from "react-icons/bs";

import Mainos from '../modules/Mainos';
import './css/Matkakohde.css';

const Matkakohde = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col>
                <h1 className='header-text'>Matkakohteet</h1>
                <p className='text'>Väritä omia matkakertomuksia kuvin ja tarinoin. Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                <div>
                  <button type="button" class="btn btn-secondary">Tallenna matkasi</button>
                  <Link to="/OmatTiedot"><button type="button" class="btn btn-outline-secondary" style={{margin: 5}}>Omat matkat</button></Link>
                  
                </div>
                
              </Col>
              <Col><Image class="img-fluid" src="https://imgur.com/r5cDrZd.png"></Image></Col>
            </Row>  
          </Container>


          <hr></hr>

          <Container>
            <div>
              <Row>
                <Col>
                  <h2>Selaa matkakohteita</h2>
                  <p className='text'>Selaa kirjautuneiden käyttäjien lisäämiä matkakohteita ja uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiin!</p>
                </Col>
                <Col>
                  <Dropdown>
                    <p className='text'>Voit rajata hakua alla olevasta valikosta valitsemalla kohteen ja painamalla "Rajaa hakutulosta"-nappia.</p>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">Valitse matkakohde</Dropdown.Toggle>
                    <button type="button" class="btn btn-outline-secondary" style={{marginLeft: 2}}>Rajaa hakutulosta</button>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Suomi</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Bulgaria</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Espanja</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <Container className="browse-destinations" style={{maxHeight: 1000}}>
                  <div class="card" style={{maxWidth: 200}}>
                    <img class="card-img-top" src="https://imgur.com/0j1r0KT.png" alt="" style={{ padding: 2}}></img>
                    <div class="card-body">
                      <h4 class="card-title">Puijon torni</h4>
                      <p class="text"><BsGeoAlt/> Kuopio, Suomi</p>
                    </div>
                  </div>

                  <div class="card" style={{maxWidth: 200}}>
                    <img class="card-img-top" src="https://imgur.com/ARX301s.png" alt="" style={{padding: 2}}></img>
                    <div class="card-body">
                      <h4 class="card-title">Koli</h4>
                      <p class="text"><BsGeoAlt/> Lieksa, Suomi</p>
                    </div>
                  </div>
              </Container>
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
              <button type="button" class="btn btn-secondary" >Tallenna matkasi!</button>
            </div>
          </div>
          
          <hr></hr>
        </div>

        
    )
}

/*const Buttons = () => {
  return (
    <div className="buttons">
      <Button className='btn-in' variant="secondary">Tallenna matkasi</Button>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray'}}>Omat matkat</Button>
    </div>
  )
}*/

export default Matkakohde;