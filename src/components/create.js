import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/Matkakohde.css";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    kohde: "",
    paikka: "",
    maa: "",
    kuvaus: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
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
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
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
            value="Lisää matka"
            className="btn btn-primary"
          />
        </Form.Group>
      </Form>
    </div>
  );
}
