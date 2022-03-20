import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
              {/*</DropDownList>*/}
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
            {/*kuvat tähän*/}
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
      <Button className='btn-in' variant="secondary" >Tallenna matkasi</Button>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray' }}>Omat tiedot</Button>
    </div>
  )
}

const Buttons2 = () => {
  return (
    <div className="buttonsOmatMatkat" style={{ float: 'right' }}>
      <Button class="testi" variant="secondary" >Rajaa hakutulosta</Button>
      <br></br>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray', marginTop: '7px', marginBottom: '7px' }}>Muokkaa matkaa</Button>
      <br></br>
      <Button className="btn-in" variant='secondary'>Lisää matka</Button>
      <br></br>
      <Button variant='light' style={{ color: "grey", backgroundColor: 'lightgray', marginTop: '7px' }}>Poista matka</Button>
    </div>
  )
}
export default OmatMatkat;
