import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './css/PorukanMatkat.css';
import SignedUser from '../modules/SignedUser';

//Johanna
/* Porukan matkat-sivulla
o    voi selata (ei-yksityisiä) porukan matkoja ja niihin liitettyjä tarinoita ja kuvia
 HUOM! Porukan matkat- ja Omat matkat-sivut saisivat olla mahdollisimman yhdenmukaisia*/

const PorukanMatkat = () => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col xs={4} md={4}>
                <h1 className='header-text'>Porukan matkat</h1>
                <p className='text'>Väritä omia matkakertomuksia kuvin ja tarinoin. Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                <Buttons/>
              </Col>
              <Col></Col>
              <Col xs={4}><img className="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
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

              <div className="card" style={{ maxWidth: 200 }}>
                <img className="card-img-top" src="https://imgur.com/0j1r0KT.png" alt="" style={{ padding: 2 }}></img>
                <div className="card-body">
                  <h4 className="card-title">Puijon torni</h4>
                  <p className="text">Kuopio, Suomi</p>
                </div>
              </div>
              

              <div className="card" style={{ maxWidth: 200 }}>
                <img className="card-img-top" src="https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=940" alt="" style={{ padding: 2 }}></img>
                <div className="card-body">
                  <h4 className="card-title">Renggloch</h4>
                  <p className="text">Luzern, Sveitsi</p>
                </div>
              </div>

              <div className="card" style={{ maxWidth: 200 }}>
                <img className="card-img-top" src="https://i.imgur.com/Pg0YL8S.jpeg" alt="" style={{ padding: 2 }}></img>
                <div className="card-body">
                  <h4 className="card-title">Yosemite</h4>
                  <p className="text">California, USA</p>
                </div>
              </div>

              <div className="card" style={{ maxWidth: 200 }}>
                <img className="card-img-top" src="https://imgur.com/ARX301s.png" alt="" style={{ padding: 2 }}></img>
                <div className="card-body">
                  <h4 className="card-title">Koli</h4>
                  <p className="text">Lieksa, Suomi</p>
                </div>
              </div>

            </Container>

            <div>
              <SignedUser/>
            </div>
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
      }} className="btn btn-outline-secondary" style={{ marginLeft: 2 }}>Siirry selaamaan</button>
    </div>
  )
}

export default PorukanMatkat;
