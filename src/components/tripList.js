import React, { useEffect, useState } from "react";
import { Modal, Form, Card, CardImg, ModalBody, Image } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
import "./css/Matkakohde.css";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Record = (props) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);
  const showTripCard = () => setShowCard(!showCard);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const showTripEdit = () => setShowEdit(!showEdit);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showTripDelete = () => setShowDelete(!showDelete);


  return (
    <div style={{ display: "inline-block" }}>
      <div
        className="browse-Trips"
        style={{ marginBottom: 5, marginInline: 2.5 }}
      >
        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 300, height: 400 }}
          onClick={showTripCard}
        >
          <CardImg
            className="img-fluid destination-img"
            variant="top"
            src="https://imgur.com/0j1r0KT.png"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">{props.record.matka}</h4>
            <p className="location">Sijainti</p>
          </Card.Body>
        </Card>
      </div>
     
      <>
        <Modal show={showCard} onHide={handleCloseCard}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>{props.record.matka}</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Image
              style={{ maxWidth: 465 }}
              src="https://imgur.com/0j1r0KT.png"
            ></Image>
            <p></p>
            <p>{props.record.tarina}</p>
            <p className="location">Sijainti <br></br>{props.record.yksityisyys}</p>
            <div className="card-btns">
            <Link className="btn btn-secondary" to={`/editomatmatkat/${props.record._id}`}>Muokkaa matkaa</Link>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={showTripDelete}
              >
                Poista matka
              </button>
            </div>
          </ModalBody>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCloseCard}
            >
              Poistu
            </button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Muokkaa matkaa</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Row>
            
            </Row>
          </ModalBody>
        </Modal>
      </>

      <>
        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Poistetaanko matka?</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <p>Oletko varma, että haluat poistaa matka?</p>
            <Row>
              <div className="card-btns">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    props.deleteRecord(props.record._id);
                  }}
                >
                  Poista
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleCloseDelete}
                >
                  Peruuta
                </button>
              </div>
            </Row>
          </ModalBody>
        </Modal>
      </>
    </div>
  );
};

export default function RecordList() {
  const [omat, setomat] = useState([]);

  // This method fetches the matkat from the database.
  // This method fetches the users from the database.
  useEffect(() => {
    async function getomat() {
      const response = await fetch(`http://localhost:5000/record/omat`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const omat = await response.json();
      setomat(omat);
    }

    getomat();

    return;
  }, [omat.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/omat/${id}`, {
      method: "DELETE",
    });

    const newOmat = omat.filter((el) => el._id !== id);
    setomat(newOmat);
  }
  

  // This method will map out the matkat on the table
  function recordList() {
    return omat.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the matkat of individuals.
  return <div>{recordList()}</div>;
}

