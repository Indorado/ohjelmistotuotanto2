import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import Mainos from '../modules/Mainos';
import './css/PorukanMatkat.css';

//Johanna
/* Porukan matkat-sivulla
o    voi selata (ei-yksityisiä) porukan matkoja ja niihin liitettyjä tarinoita ja kuvia
 HUOM! Porukan matkat- ja Omat matkat-sivut saisivat olla mahdollisimman yhdenmukaisia*/

const PorukanMatkat = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col>
                <h1 className='header-text'>Porukan matkat</h1>
                <p className='text'>Väritä omia matkakertomuksia kuvin ja tarinoin. Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                <Buttons/>
              </Col>
              <Col><Image class="img-fluid" src="https://imgur.com/r5cDrZd.png"></Image></Col>
            </Row>  
          </Container>


          <hr></hr>

          <Container>
            <div>
                <h2>Selaa matkoja</h2>
                <p className='text'>Selaa kirjautuneiden käyttäjien lisäämiä matkakertomuksia ja uppoudu kuvin ja tarinoin väritettyihin matkoihin!</p>
                
            </div>
          </Container>
          <Container className="browse-destinations" style={{ maxHeight: 1000 }}>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://imgur.com/0j1r0KT.png" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Puijon torni</h4>
                  <p class="text">Kuopio, Suomi</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200, }}>
                <img class="card-img-top" src="https://i.imgur.com/bO8pN0y.jpeg" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Roches Crahay</h4>
                  <p class="text">Aywaille, Belgia</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://i.imgur.com/4QBZMFI.jpeg" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Renggloch</h4>
                  <p class="text">Luzern, Sveitsi</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://i.imgur.com/Pg0YL8S.jpeg" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Yosemite</h4>
                  <p class="text">California, USA</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://imgur.com/ARX301s.png" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Koli</h4>
                  <p class="text">Lieksa, Suomi</p>
                </div>
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
              <button class="btn btn-outline-secondary">Tallenna matkasi!</button>
            </div>
          </div>
          
          <hr></hr>
         
        </div>
        
    )
}

const Buttons = () => {
  return (
    <div className="buttons">
      <Button className='btn-in' variant="secondary">Tallenna matkasi</Button>
      <button type="button" onClick={(e) =>{
        e.preventDefault();
        window.location.href='http://localhost:3000/Matkakohde';
      }} class="btn btn-outline-secondary" style={{ marginLeft: 2 }}>Siirry selaamaan</button>
    </div>
  )
}

export default PorukanMatkat;
