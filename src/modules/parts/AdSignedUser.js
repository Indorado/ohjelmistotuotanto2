import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './css/AdSignedUser.css';

const AdSign = () => {
    return (
        <div className="as-signed-user">
            <Col className='item'>
                <h2>Kirjautuneena käyttäjänä</h2>
                <p className='text'>Kirjautuneena käyttäjänä koet enemmän Kuopion Kulkijoiden web-sovelluksessa!</p>
            </Col>
            <Container>
                <Row className='text'>
                    <Col>
                    <h4><IoMdCheckmarkCircleOutline /> Matkakohteet</h4>
                    <p >Voit lisätä, poistaa, päivittää ja selata matkakohteita.</p>
                    </Col>
                    <Col>
                    <h4><IoMdCheckmarkCircleOutline /> Porukan matkat</h4>
                    <p>Voit selata porukan matkoja ja niihin liitettyjä kuvia ja tarinoita!</p>
                    </Col>
                    <Col>
                    <h4><IoMdCheckmarkCircleOutline /> Omat matkat</h4>
                    <p>Voit kertoa omasta matkastasi ja lisätä matkaan tarinoita ja kuvia!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdSign;