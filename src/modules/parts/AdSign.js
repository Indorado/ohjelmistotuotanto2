import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const AdSign = () => {
    return (
        <div>
            <Col className='item'>
                <h2>Kirjautuneena käyttäjänä</h2>
                <p className='text'>Kirjautuneena käyttäjänä koet enemmän Kuopion Kulkijoiden web-sovelluksessa!</p>
            </Col>
            <Col>
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
            </Col>
        </div>
    )
}

export default AdSign;