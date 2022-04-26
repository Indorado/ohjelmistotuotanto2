import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  Modal,
  Form,
  Card,
  CardImg,
  ModalBody,
  Image,
  FormCheck,
} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import SingleFileUploadComponent from "./single-file-upload.component";

export default function EditOmatmatkat() {
  const [form, setForm] = useState({
    matka: "",
    tarina: "",
    yksityinen: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const editInput = e.currentTarget;
    if (editInput.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    const editedMatka = {
      matka: form.matka,
      tarina: form.tarina,
      yksityisyys: form.yksityisyys,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedMatka),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setValidated(true);
    navigate("/OmatMatkat");
  }
  // Merkkilaskuri
  const [characterCount, setCharacterCount] = useState(0);

  // VALIDATION
  const [validated, setValidated] = useState(false);
  const error = "Täytä puuttuva kenttä!";

  // This following section will display the form that takes input from the user to update the data.
  return (
    <Container>
      <h3>Muokkaa matkaa</h3>
      <Form validated={validated} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formGridDestination">
        <Form.Control
            required
            maxLength={30}
            placeholder="matka"
            id="matka"
            value={form.kohde}
            onChange={(e) => updateForm({ matka: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          <Form.Label>Kohdenimi</Form.Label>
          <Form.Control
            required
            maxLength={30}
            placeholder="Kohdenimi"
            id="kohde"
            value={form.kohde}
            onChange={(e) => updateForm({ kohde: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Kuvaus</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={7}
            maxLength={250}
            controlId="formGridPresentation"
            placeholder="Matkakohteen kuvaus"
            id="kuvaus"
            value={form.kuvaus}
            onChange={(e) =>
              updateForm(
                { kuvaus: e.target.value },
                setCharacterCount(e.target.value.length)
              )
            }
          ></Form.Control>
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          <p className="counter-text">{characterCount} / 250</p>
        </Form.Group>

        <br></br>
        <p>Haluatko pitää matkasi julkisena vai yksityisenä?</p>
        <FormCheck id="flexCheckDefault" label="Julkinen" />
        <FormCheck id="flexCheckDefault" label="Yksityinen" />
        <br></br>

        <p>Lisää kuva matkaltasi</p>

        <div className="card">
          <div className="card-header">Lataa matkakuva</div>
          <div className="card-body">
            <SingleFileUploadComponent />
          </div>
        </div>
        <br></br>

        <Form.Group>
          <input
            type="submit"
            value="Tallenna muutokset"
            className="btn btn-secondary"
          />
          <Link to="/OmatMatkat">
            <button
              value="Tallenna muutokset"
              className="btn btn-outline-secondary"
              style={{ marginLeft: 5 }}
            >
              Poistu
            </button>
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
}
