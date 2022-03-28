import { React, useState} from "react";
import { Modal, Form, Card, CardImg, CardGroup, OverlayTrigger, Popover, PopoverBody, Tooltip, ModalBody, FloatingLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BsGeoAlt,  } from "react-icons/bs";
// BsGeo, BsGlobe

import SignedUser from '../modules/SignedUser';
import './css/Matkakohde.css';

import SingleFileUploadComponent from '../components/single-file-upload.component';

const Matkakohde = (props) => {
    return (
        <div>
          <Container className="hero">
            <Row>
              <Col xs={4} md={4}>
                <h1 className='header-text'>Matkakohteet</h1>
                <p className='text'>Väritä omia matkakertomuksia kuvin ja tarinoin. Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                <div>
                  <button type="button" className="btn btn-secondary">Tallenna matkasi</button>
                  <Link to="/OmatTiedot"><button type="button" className="btn btn-outline-secondary" style={{margin: 5}}>Omat matkat</button></Link>
                </div>
              </Col>
              <Col></Col>
              <Col xs={4}><img className="img-fluid" src="https://imgur.com/uHy4z87.png" alt=""></img></Col>
            </Row>  
          </Container>

          <hr></hr>

          <Container>
            <div>
              <Row className="mb-3">
                <Col xs={4}>
                  <h2>Selaa matkakohteita</h2>
                  <p className='text'>Selaa kirjautuneiden käyttäjien lisäämiä matkakohteita ja uppoudu kuvin ja tarinoin väritettyihin matkakertomuksiin!</p>
                  <Buttons/>
                </Col>
              </Row>

              
              <CardGroup className="browse-destinations" style={{maxHeight: 1000}}>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Toiminnallisuus hukassa</Tooltip>}>
                  <Card className="destination-card" style={{ cursor: "pointer", maxWidth: 200 }}>
                    <CardImg className="destination-img" variant="top" src="https://imgur.com/0j1r0KT.png"></CardImg>
                    <Card.Body>
                      <h4 className="destination">Puijon torni</h4>
                      <p className="location"><BsGeoAlt/> Kuopio, Suomi</p>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </CardGroup>
            </div>
          </Container>

          <div>
            <SignedUser/>
          </div>
        </div>
    )
}

/*const cardClick = () => {
  return (
    <div>
      
    </div>
  )
}*/

const Buttons = () => {
  return (
    <div className="destination-btn">
      <Row>
        <AddDestination/>
      </Row>
    </div>
  )
}

const NewCard = (props) => {
  const {data} = props;
  const info = data.map((a, index) => {
    return (
      <div key={index}>
        <CardImg className="destination-img" variant="top" src="https://imgur.com/0j1r0KT.png"></CardImg>
        <Card.Body>
          <h4 className="destination">{a.destination}</h4>
          <p className="location"><BsGeoAlt/> {a.location}, {a.country}</p>
          <p className="description">{a.desc}</p>
        </Card.Body>
      </div>
            
    )
  })

  return (
    <CardGroup className="browse-destinations" style={{maxHeight: 1000}} >
      <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-2">Toiminnallisuus hukassa</Tooltip>}>
        <Card className="destination-card" style={{ cursor: "pointer", maxWidth: 200 }}></Card>
        <div>{info}</div>
      </OverlayTrigger>
    </CardGroup>
  )
}

const AddDestination = () => {
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const showAddDestination = () => setShowAdd(!showAdd);

  const [ data, setData ] = useState([]); 
  const [ destination, setDestination ] = useState([]);
  const [ location, setLocation ] = useState([]);
  const [ country, setCountry ] = useState([]);
  const [ desc, setDesc ] = useState([]);

 

  const onAddDestination = () => {
    setData((data) => [...data], {destination: destination, location: location, country: country, desc: desc});
  };

  //const list = data.map((a, index) => <li key={index}>{a.destination}</li>)
  //console.log(list);
  //console.log(destination);

  const handleSubmit = (e) => {
    handleCloseAdd();
    e.preventDefault();
    e.target.reset();
  }
  return (
    <div>
      <button type="button" className="btn btn-outline-secondary" onClick={showAddDestination}>Lisää matkakohde</button>
      
      <>
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Lisää matkakohde</h4></Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formGridDestination">
              <Form.Label>Kohdenimi</Form.Label>
              <Form.Control placeholder="Puijon torni" value={destination}/>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridLocation">
                <Form.Label>Paikkakunta</Form.Label>
                <Form.Control placeholder="Paikkakunta"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLocation2">
                <Form.Label>Maa</Form.Label>
                <Form.Control placeholder="Maa"/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridDescription">
              <Counter/>
            </Form.Group>

            <Form.Group >
              <Form.Label>Lisää kuva</Form.Label>
              <p>Toiminnallisuus hukassa.</p>
            </Form.Group>
          </Form>
        </ModalBody>
          
        <Modal.Footer>
          <button type="button" className="btn btn-outline-secondary" onClick={() => onAddDestination()}>Tallenna matkakohde</button>
        </Modal.Footer>
      </Modal>
      </>
    </div>
  )
}

const Counter = () => {
  const [ characterCount, setCharacterCount ] = useState(0);
  if (characterCount < 250) {
    return (
      <div>
        <Form.Group>
          <Form.Label>Kuvaus</Form.Label> 
          <Form.Control as="textarea" rows={5} maxLength={250} controlId="formGridPresentation" placeholder="Matkakohteen kuvaus" onChange={(e) => setCharacterCount(e.target.value.length)}></Form.Control>
          <p className='counter-text'> {characterCount}/ 250</p>
        </Form.Group>
      </div>
    )
  } else {
    return (
    <div>
      <Form.Group>
      <Form.Label>Kuvaus</Form.Label> 
          <Form.Control as="textarea" rows={5} maxLength={250} controlId="formGridPresentation" placeholder="Matkakohteen kuvaus" onChange={(e) => setCharacterCount(e.target.value.length)}></Form.Control>
        <p className='counter-text-alert'> {characterCount}/ 250 Merkkimäärä täynnä!</p>
      </Form.Group>
    </div>
  )
  }
}

const EditDestination = () => {
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const showEditDestination = () => setShowEdit(!showEdit);

  return (
    <div>
      <button type="button" className="btn btn-outline-secondary" onClick={showEditDestination}>Muokkaa</button>
        <>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title><h4>Muokkaa matkakohdetta</h4></Modal.Title>
          </Modal.Header>
          <p style={{ marginTop: 15, marginLeft: 10 }}>Tähän toiminnallisuutta</p>
          <Modal.Footer>
            <button type="button" className="btn btn-outline-secondary" onClick={handleCloseEdit}>Tallenna muutokset</button>
          </Modal.Footer>
        </Modal>
        </>
    </div>
  )
}

const DeleteDestination = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showDeleteDestination = () => setShowDelete(!showDelete);

  return (
    <div>
      <button type="button" className="btn btn-outline-secondary" onClick={showDeleteDestination}>Poista</button>
      <>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Poista matkakohde</h4></Modal.Title>
        </Modal.Header>
        <p style={{ marginTop: 15, marginLeft: 10 }}>Tähän toiminnallisuutta.</p>
        <Modal.Footer>
          <button type="button" className="btn btn-outline-secondary" onClick={handleCloseDelete}>Poista matkakohde</button>
        </Modal.Footer>
      </Modal>
      </>
    </div>
  )
}

export default Matkakohde;