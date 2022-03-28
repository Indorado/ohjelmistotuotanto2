import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './css/Mainos.css';

const Mainos = () => {
    return (
        <div>
            <Container>
                <Row className="mb-3">
                    <Col xs={5} md={5}>
                        <h2>Tallenna omia matkakertomuksia</h2>
                        <p className='text'>Määritä matkakertomuksesi yksityisyys ja väritä omia matkakertomuksia kuvin ja tarinoin! Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                    </Col>
                    <Col></Col>
                    <Col xs={4}><img class="img-fluid" src="https://i.imgur.com/US0C0Lc.png" alt=""></img></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mainos;