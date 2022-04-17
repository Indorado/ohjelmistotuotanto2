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
    //e.preventDefault();
    const inputs = e.currentTarget;
    if (inputs.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

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
        <Form.Group className="mb-3" controlId="formGridDestination">
          <Form.Label>Kohdenimi</Form.Label>
          <Form.Control
            required
            placeholder="Kohdenimi"
            maxLength={30}
            id="kohde"
            value={form.kohde}
            onChange={(e) => updateForm({ kohde: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>Paikkakunta</Form.Label>
            <Form.Control
              required
              placeholder="Paikkakunta"
              maxLength={30}
              id="paikka"
              value={form.paikka}
              onChange={(e) => updateForm({ paikka: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Maa</Form.Label>
            <Form.Control
              required
              placeholder="Maa"
              maxLength={30}
              id="maa"
              value={form.maa}
              onChange={(e) => updateForm({ maa: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

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
            onChange={(e) => updateForm({ kuvaus: e.target.value }, setCharacterCount(e.target.value.length) )}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
          <p className="counter-text">{characterCount} / 250</p>
        </Form.Group>
        <Form.Group>
          <input
            type="submit"
            value="Lisää matkakohde"
            className="btn btn-secondary"
          />
        </Form.Group>
      </Form>
    </div>
  );
}