import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Mainos from './modules/Mainos';
import './components/css/OmatMatkat.css';


//C:\temp\oh2\Ohjt2-K22-GroupQ-1\node_modules\bootstrap\dist\css\bootstrap.min.css

//node_modules\bootstrap\dist\css\bootstrap.min.css
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import SingleFileUploadComponent from './components/single-file-upload.component';




//Johanna

const OmatMatkat = () => {
  return (
    <div>
      <Container className="hero">
        <Row>
          <Col>
            <h1 className='header-text'>Omat matkat</h1>
            <p className='text'>Jaa matkakertomuksesi kuvin ja tarinoin väritettynä muille käyttäjille!  Määritä matkakertomuksesi yksityisyys ja nauti tuoreina pysyvistä matkamuistoista!</p>
            <Buttons />
          </Col>
          <Col><Image class="img-fluid" src="https://imgur.com/r5cDrZd.png"></Image></Col>
        </Row>
      </Container>


      <hr></hr>


      <Container>
        <div>
          <h2>Selaa omia matkoja</h2>
          <p className='text'>Selaa itse lisäämiäsi matkakohteita ja uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiisi!</p>
          <Row>
            <Col>

              <Buttons2 />
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        Lataa matkakuva
                      </div>
                      <div className="card-body">
                        <SingleFileUploadComponent />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Container className="browse-destinations" style={{ maxHeight: 1000 }}>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://imgur.com/0j1r0KT.png" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Puijon torni</h4>
                  <p class="text">Kuopio, Suomi</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://imgur.com/ARX301s.png" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Koli</h4>
                  <p class="text">Lieksa, Suomi</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://imgur.com/ARX301s.png" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Koli</h4>
                  <p class="text">Lieksa, Suomi</p>
                </div>
              </div>

              <div class="card" style={{ maxWidth: 200 }}>
                <img class="card-img-top" src="https://imgur.com/ARX301s.png" alt="" style={{ padding: 2 }}></img>
                <div class="card-body">
                  <h4 class="card-title">Koli</h4>
                  <p class="text">Lieksa, Suomi</p>
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
          </Row>

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
      <Button className='btn-in' variant="secondary">Lisää uusi matka</Button>
      <button type="button" onClick={(e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/OmatTiedot';
      }} class="btn btn-outline-secondary" style={{ marginLeft: 2 }}>Omat tiedot</button>
    </div>
  )
}

const Buttons2 = () => {
  return (
    <div className="btnMainos" >
      <p className="text">Tästä pääset muokkaamaan, lisäämään ja poistamaan omia matkakohteita.</p>
      <button type="button" class="btn btn-outline-secondary">Muokkaa</button>
      <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 5 }}>Lisää</button>
      <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 5 }}>Poista</button>
    </div>
  )
}
export default OmatMatkat;
