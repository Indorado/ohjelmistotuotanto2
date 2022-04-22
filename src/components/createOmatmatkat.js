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
import { propTypes } from "react-bootstrap/esm/Image";

export default function CreateOmatmatkat() {
    const [form, setForm] = useState({
        tarina: "",
        yksityisyys: ""
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

        //e.preventDefault();
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newStory = { ...form };

        await fetch("http://localhost:5000/record/add/omat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStory),
        }).catch((error) => {
            window.alert(error);
            return;
        }); 

        setValidated(true);
        navigate(window.location);  
    }

    // Character counter
    const [characterCount, setCharacterCount] = useState(0);

    // VALIDATION
    const [validated, setValidated] = useState(false);
    const error = "Täytä puuttuva kenttä!"
  
    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <p>Lisää matkan tiedot sekä matkakertomus.</p>
                <Form.Group className="mb-3" controlId="formGridDestination">
                    <Form.Label>Kohdenimi</Form.Label>
                    <Form.Control
                        placeholder="Kohdenimi"
                        maxLength={30}
                        id="kohde"
                        onChange={(e) => updateForm({ kohde: e.target.value })}
                    >
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {error}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <p>Eikö matkakohdetta löydy? Lisää uusi matkakohde: 
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={showAddDestination}
                        >
                            Lisää matkakohde
                        </button>
                    </p>
                </Form.Group>

                {/*Matkakohteen lisäys*/} 
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

                <Form.Group className="mb-3" controlId="formGridDescription">
                    <Form.Label>Kuvaus</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={7}
                        maxLength={250}
                        controlId="formGridPresentation"
                        placeholder="Kerro tässä matkastasi"
                        id="kuvaus"
                        value={form.tarina}
                        onChange={(e) => updateForm({ tarina: e.target.value }, setCharacterCount(e.target.value.length) )}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {error}
                    </Form.Control.Feedback>
                    <p className="counter-text">{characterCount} / 250</p>
                </Form.Group>
    
                <br></br>
                <Form.Group>
                <Form.Group>
                    <Form.Label>Valitse matkasi yksityisyysasetukset</Form.Label>
                    <Form.Select
                        required
                        id="yksityinen" 
                        value={form.yksityisyys}
                        onChange={(e) => updateForm({ yksityisyys: e.target.value })}
                        >
                        <option>Valitse yksityisyysasetukset</option>
                        <option value="Julkinen">Julkinen</option>
                        <option value="Yksityinen">Yksityinen</option>
                    </Form.Select>
                </Form.Group>
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
                </Form.Group>
                <br></br>
                <Form.Group>
                    <input style={{ marginRight: '5px' }}
                        type="submit"
                        value="Lisää matka"
                        className="btn btn-secondary"
                    />
                    {/* <input
                        type="submit"
                        value="Peruuta"
                        className="btn btn-outline-secondary"
                    /> */}
                </Form.Group>
            </Form>
        </div>
    );
}

