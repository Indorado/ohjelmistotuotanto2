import React, { useEffect, useState } from "react";
import { Modal, Form, Card, CardImg, ModalBody, Image } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";
import "./css/Matkakohde.css";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";


const Record = (props) => {
  const [showCard, setShowCard] = useState(false);
  const handleCloseCard = () => setShowCard(false);
  const showDestinationCard = () => setShowCard(!showCard);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const showDestinationEdit = () => setShowEdit(!showEdit);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const showDestinationDelete = () => setShowDelete(!showDelete);

  return (
    <div style={{ display: "inline-block" }}>
      <div
        className="browse-destinations"
        style={{ marginBottom: 5, marginInline: 2.5 }}
      >
        <Card
          className="destination-card"
          style={{ cursor: "pointer", maxWidth: 319, height: 439 }}
          onClick={showDestinationCard}
        >
          <CardImg
            className="img-fluid destination-img"
            variant="top"
            src="https://imgur.com/ARX301s.png"
          ></CardImg>
          <Card.Body>
            <h4 className="destination">{props.record.kohde}</h4>
            <p className="location">
              {props.record.paikka}, {props.record.maa}
            </p>
            {/* <p className="location">
              <BsGeoAlt /> {props.record.kuvaus}
            </p> */}
          </Card.Body>
        </Card>
      </div>
     
      <>
        <Modal show={showCard} onHide={handleCloseCard}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>{props.record.kohde}</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Image
              style={{ maxWidth: 465 }}
              src="https://i.imgur.com/M94aUj9.png"
            ></Image>
            <p></p>
            <p>{props.record.kuvaus}</p>
            <p className="location">
              {props.record.paikka}, {props.record.maa}
            </p>
            <div className="card-btns">
            <Link className="btn btn-secondary" to={`/edit/${props.record._id}`}>Muokkaa matkakohdetta</Link>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={showDestinationDelete}
              >
                Poista matkakohde
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
              <h4>Muokkaa matkakohdetta</h4>
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
              <h4>Poistetaanko matkakohde?</h4>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <p>Oletko varma, että haluat poistaa matkakohteen?</p>
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
  const [tarinat, settarinat] = useState([]);

  // This method fetches the tarinat from the database.
  useEffect(() => {
    async function gettarinat() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const tarinat = await response.json();
      settarinat(tarinat);
    }

    gettarinat();

    return;
  }, [tarinat.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newTarinat = tarinat.filter((el) => el._id !== id);
    settarinat(newTarinat);
  }

  // This method will map out the tarinat on the table
  function recordList() {
    return tarinat.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the tarinat of individuals.
  return <div>{recordList()}</div>;
}

// MATKAKOHTEEN MUOKKAUS
const EditDestination = () => {
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const showEditDestination = () => setShowEdit(!showEdit);

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={showEditDestination}
      >
        Muokkaa
      </button>
      <>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Muokkaa matkakohdetta</h4>
            </Modal.Title>
          </Modal.Header>
          <p style={{ marginTop: 15, marginLeft: 10 }}>
            Tähän toiminnallisuutta
          </p>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCloseEdit}
            >
              Tallenna muutokset
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
