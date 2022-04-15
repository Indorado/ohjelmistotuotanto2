import { React, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/OmatMatkat.css";
import { useNavigate } from "react-router";
import {
    Modal,
    Form,
    Card,
    CardImg,
    ModalBody,
    FormCheck
} from "react-bootstrap";
import Create from "../components/create";

import SingleFileUploadComponent from './single-file-upload.component';


export default function CreateOmatmatkat() {
    const [form, setForm] = useState({
        kohde: "",
        paikka: "",
        maa: "",
        kuvaus: "",
    });
    const navigate = useNavigate();

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const showAddDestination = () => setShowAdd(!showAdd);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {

        e.preventDefault();
    }
    /* When a post request is sent to the create url, we'll add a new record to the database.
    const newStory = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStory),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ kohde: "", paikka: "", maa: "", kuvaus: "" });
    window.location.reload();
  }*/

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <Form onSubmit={onSubmit}>


                <p>Lisää matkan tiedot sekä matkakertomus.</p>
                <Form.Group className="mb-3" controlId="formGridDestination">
                    <Form.Label>Kohdenimi</Form.Label>
                    <Form.Control
                        placeholder="Puijon torni"
                        id="kohde"
                        value={form.kohde}
                        onChange={(e) => updateForm({ kohde: e.target.value })}
                    />
                </Form.Group>
                <p>Eikö matkakohdetta löydy?
                    Lisää uusi matkakohde: <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={showAddDestination}
                    >
                        Lisää matkakohde
                    </button>
                </p>



                <>
                    <Modal show={showAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h4>Lisää matkakohde</h4>
                            </Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                            <Create />
                        </ModalBody>
                    </Modal>
                </>


                <Form.Control as="textarea" rows={7}
                    maxLength={300} placeholder="Matkakertomus"
                    style={{ marginBottom: 5 }}>
                </Form.Control>
                <br></br>
                <p>Haluatko pitää matkasi julkisena vai yksityisenä?</p>
                <FormCheck id="flexCheckDefault" label="Julkinen" />
                <FormCheck id="flexCheckDefault" label="Yksityinen" />
                <br></br>

                <p>Lisää kuva matkaltasi</p>

                <div className="card">
                    <div className="card-header">
                        Lataa matkakuva
                    </div>
                    <div className="card-body">
                        <SingleFileUploadComponent />
                    </div>
                </div>
                <br></br>


                <Form.Group>
                    <input style={{ marginRight: '5px' }}
                        type="submit"
                        value="Lisää matka"
                        className="btn btn-primary"
                    />

                    <input
                        type="submit"
                        value="Peruuta"
                        className="btn btn-secondary"
                    />
                </Form.Group>
            </Form>
        </div>
    );
}

