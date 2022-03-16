
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './css/Mainos.css';

const Mainos = () => {
    return (
        <div>
            <hr></hr>
            <Container>
                <Row>
                    <Col>
                        <h2 className='header-text'>Tallenna omia matkakertomuksia</h2>
                        <p className='text'>Määritä matkakertomuksesi yksityisyys ja väritä omia matkakertomuksia kuvin ja tarinoin! Voit myös uppoutua muiden käyttäjien matkakertomuksiin ja etsiä inspiraatioita seuraavalle matkallesi!</p>
                    </Col>
                    <Col><img class="img-fluid" src="https://i.imgur.com/US0C0Lc.png"></img></Col>
                </Row>
            </Container>

            <hr></hr>
        </div>
    )
}

export default Mainos;