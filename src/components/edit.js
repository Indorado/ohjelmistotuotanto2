import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Modal, Form, Card, CardImg, ModalBody, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 
export default function Edit() {
 const [form, setForm] = useState({
    kohde: "",
    paikka: "",
    maa: "",
    kuvaus: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
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
   const editedTarina = {
     kohde: form.kohde,
     paikka: form.paikka,
     maa: form.maa,
     kuvaus: form.kuvaus,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedTarina),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Muokkaa kohdetta</h3>
     <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formGridDestination">
          <Form.Label>Kohdenimi</Form.Label>
          <Form.Control
            placeholder="Puijon torni"
            id="kohde"
            value={form.kohde}
            onChange={(e) => updateForm({ kohde: e.target.value })}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>Paikkakunta</Form.Label>
            <Form.Control
              placeholder="Paikkakunta"
              id="paikka"
              value={form.paikka}
              onChange={(e) => updateForm({ paikka: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Maa</Form.Label>
            <Form.Control
              placeholder="Maa"
              id="maa"
              value={form.maa}
              onChange={(e) => updateForm({ maa: e.target.value })}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Kuvaus</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            maxLength={250}
            controlId="formGridPresentation"
            placeholder="Matkakohteen kuvaus"
            id="kuvaus"
            value={form.kuvaus}
            onChange={(e) => updateForm({ kuvaus: e.target.value })}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <input
            type="submit"
            value="Tallenna muutokset"
            className="btn btn-primary"
          />
        </Form.Group>
      </Form>
   </div>
 );
}