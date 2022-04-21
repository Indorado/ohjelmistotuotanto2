import { React, useState, useEffect } from "react";

import InputGroup from 'react-bootstrap/InputGroup'
import {
  Modal,
  Card, Table,
  CardImg,
  ModalBody, Image
} from "react-bootstrap";

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BsGeoAlt } from "react-icons/bs";

import './css/Jasenet.css';


const Record = (props) => {
    const [showUser, setShowUser] = useState(false);
    const handleCloseCard = () => setShowUser(false);
    const showUserCard = () => setShowUser(!showUser);
  
    return (
      <div style={{ display: "inline-block" }}>
        <div className="browse-users"
          style={{ marginBottom: 5, marginInline: 2.5 }}
        >
          <Card
            className="user-card"
            style={{ cursor: "pointer", maxWidth: 319, height: 439 }}
            onClick={showUserCard}
          >
            <CardImg
              className="user-img"
              variant="top"
              src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg"
            ></CardImg>
            <Card.Body>
              <h4>{props.record.etunimi} {props.record.sukunimi}</h4>
              <p className="location">{props.record.paikkakunta}, {props.record.maa}</p>
            </Card.Body>
          </Card>
  
          <>
          <Modal show={showUser} onHide={handleCloseCard}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4 className="user-title">{props.record.etunimi} {props.record.sukunimi}</h4>
              </Modal.Title>
            </Modal.Header>
            <ModalBody>
              <Image style={{maxWidth: 465}} src="https://p0.piqsels.com/preview/325/981/320/avatar-people-person-business.jpg"></Image>
              <h4 className="text">{props.record.nimimerkki}</h4>
              <p className="location">{props.record.paikkakunta}, {props.record.maa}</p>
              <p className="user-pres">{props.record.bio}</p>
              
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
        </div>
      </div>
    )
};

export default function RecordList() {
  const [users, setusers] = useState([]);

  // This method fetches the users from the database.
  useEffect(() => {
    async function getusers() {
      const response = await fetch(`http://localhost:5000/record/user`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const users = await response.json();
      setusers(users);
    }

    getusers();

    return;
  }, [users.length]);
  

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newusers = users.filter((el) => el._id !== id);
    setusers(newusers);
  }

  // This method will map out the users on the table
  function recordList() {
    return users.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the users of individuals.
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
