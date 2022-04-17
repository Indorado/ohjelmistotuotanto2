import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/Matkakohde.css";
import { useNavigate } from "react-router";

export default function Createuser() {
  const [form, setForm] = useState({
    nimimerkki: "",
    etunimi: "",
    sukunimi: "",
    sposti: "",
    salasana:""
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

    await fetch("http://localhost:5000/record/add/user", {
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
          <Form.Label>nimimerkki</Form.Label>
          <Form.Control
            required
            placeholder="Nimimerkki"
            maxLength={30}
            id="nimimerkki"
            value={form.nimimerkki}
            onChange={(e) => updateForm({ nimimerkki: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>etunimi</Form.Label>
            <Form.Control
              required
              placeholder="Etunimi"
              maxLength={30}
              id="etunimi"
              value={form.etunimi}
              onChange={(e) => updateForm({ etunimi: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>sukunimi</Form.Label>
            <Form.Control
              required
              placeholder="sukunimi"
              maxLength={30}
              id="sukunimi"
              value={form.sukunimi}
              onChange={(e) => updateForm({ sukunimi: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
</Row>
<Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>sposti</Form.Label>
            <Form.Control
              required
              placeholder="sposti"
              maxLength={30}
              id="sposti"
              value={form.sposti}
              onChange={(e) => updateForm({ sposti: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>salasana</Form.Label>
            <Form.Control
              required
              placeholder="salasana"
              maxLength={30}
              id="salasana"
              value={form.salasana}
              onChange={(e) => updateForm({ salasana: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>salasana</Form.Label>
            <Form.Control
              required
              placeholder="Vahvista salasana"
              maxLength={30}
              id="salasana"
              value={form.salasana}
              onChange={(e) => updateForm({ salasana: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          
          </Row>
          <Form.Group>
          <input
            type="submit"
            value="Rekisteröidy"
            className="btn btn-secondary"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

//REKISTERÖIDY:
const LoginFormSignUp = ({ onSubmit }) => {
    const [sposti, setSposti] = useState("");
    const [salasana, setSalasana] = useState("");
    const [nimimerkki, setNimimerkki] = useState("");
    const [etunimi, setEtunimi] = useState("");
    const [sukunimi, setSukunimi] = useState("");
  
    const [nimimerkkiError, setNimimerkkiError] = useState("");
    const [etunimiError, setEtunimiError] = useState("");
    const [sukunimiError, setSukunimiError] = useState("");
    const [salasanaError, setsalasanaError] = useState("");
    const [spostiError, setSpostiError] = useState("");
  
    const handleValidation = (event) => {
      
      let formIsValid = true;
  
      if (!nimimerkki.match(/^[a-zA-Z]{4,16}$/)) {
        formIsValid = false;
        setNimimerkkiError(
          "Vain kirjaimet ovat sallittuja ja nimimerkin vähimmäispituus on 4 merkkiä ja maksimipituus on 16 merkkiä."
        );
        return false;
      } else {
        setNimimerkkiError("");
        formIsValid = true;
      }
  
      if (!etunimi.match(/^[a-zA-Z]{2,15}$/)) {
        formIsValid = false;
        setEtunimiError(
          "Vain kirjaimet ovat sallittuja ja etunimen vähimmäispituus on 2 merkkiä ja maksimipituus on 16 merkkiä."
        );
        return false;
      } else {
        setEtunimiError("");
        formIsValid = true;
      }
  
      if (!sukunimi.match(/^[a-zA-Z]{2,16}$/)) {
        formIsValid = false;
        setSukunimiError(
          "Vain kirjaimet ovat sallittuja ja sukunimen vähimmäispituus on 2 merkkiä ja maksimipituus on 16 merkkiä."
        );
        return false;
      } else {
        setSukunimiError("");
        formIsValid = true;
      }
  
      if (!sposti.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        formIsValid = false;
        setSpostiError("Sähköpostiosoite ei kelpaa.");
        return false;
      } else {
        setSpostiError("");
        formIsValid = true;
      }
  
      if (!salasana.match(/^[a-zA-Z]{8,22}$/)) {
        formIsValid = false;
        setsalasanaError(
          "Vain kirjaimet ovat sallittuja ja salasanan vähimmäispituus on 8 merkkiä ja maksimipituus on 22 merkkiä."
        );
        return false;
      } else {
        setsalasanaError("");
        formIsValid = true;
      }
  
      return formIsValid;
    };
  };