import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/Matkakohde.css";
import { useNavigate } from "react-router";

export default function Createuser() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [form, setForm] = useState({
    nimimerkki: "",
    etunimi: "",
    sukunimi: "",
    sposti: "",
    paikkakunta: "",
    maa: "",
    bio: "",
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
    // Revitään käyttäjän tiedot
    let k = form.nimimerkki;
    let j = form.etunimi;
    let s = form.sukunimi;
    let email = form.sposti;
    let a = form.paikkakunta;
    let c = form.maa;
    let b = form.bio;
    let p = form.salasana;

    const userToken = {
      k,e, s, email, a, c, b, p
    }

    // Validointi ei toimi...
    if (!form.nimimerkki.match(/^[a-zA-Z]{4,16}$/)  && !form.etunimi.match(/^[a-zA-Z]{2,15}$/) &&
        !form.sukunimi.match(/^[a-zA-Z]{2,16}$/) && !form.sposti.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) 
        && !form.salasana.match(/^[a-zA-Z]{8,22}$/)) {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
        setIsRegistered(false);
    } else {
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newStory = { ...form };
      form.maa = e.target.value;
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

      setIsRegistered(true);
      setValidated(false);
      navigate(window.location); 
      localStorage.setItem("token", JSON.stringify(userToken));
    }
  }



  // Character counter
  const [characterCount, setCharacterCount] = useState(0);

  // VALIDATION
  const [validated, setValidated] = useState(false);

  // Virheviestit
  let eNimimerkki = "Vain kirjaimet ovat sallittuja ja nimimerkin vähimmäispituus on 4 merkkiä ja maksimipituus on 16 merkkiä";
  let eEtunimi = "Vain kirjaimet ovat sallittuja ja etunimen vähimmäispituus on 2 merkkiä ja maksimipituus on 16 merkkiä";
  let eSukunimi = "Vain kirjaimet ovat sallittuja ja sukunimen vähimmäispituus on 2 merkkiä ja maksimipituus on 16 merkkiä";
  let eSposti = "Sähköpostiosoite ei kelpaa";
  let ePaikkakunta = "Vain kirjaimet ovat sallittuja ja paikkakunnan nimen maksimipituus on 30 merkkiä";
  let eMaa = "Valitse maa"
  let eBio = "Kirjoita itsestäsi esittely"
  let eSalasana = "Vain kirjaimet ovat sallittuja ja salasanan vähimmäispituus on 8 merkkiä ja maksimipituus on 22 merkkiä";

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formGridDestination">
          <Form.Label>Nimimerkki</Form.Label>
          <Form.Control
            required
            placeholder="Nimimerkki"
            maxLength={30}
            id="nimimerkki"
            value={form.nimimerkki}
            onChange={(e) => updateForm({ nimimerkki: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            {eNimimerkki}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>Etunimi</Form.Label>
            <Form.Control
              required
              placeholder="Etunimi"
              maxLength={30}
              id="etunimi"
              value={form.etunimi}
              onChange={(e) => updateForm({ etunimi: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {eEtunimi}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Sukunimi</Form.Label>
            <Form.Control
              required
              placeholder="Sukunimi"
              maxLength={30}
              id="sukunimi"
              value={form.sukunimi}
              onChange={(e) => updateForm({ sukunimi: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {eSukunimi}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Sähköpostiosoite</Form.Label>
            <Form.Control
              required
              placeholder="Sähköpostiosoite"
              maxLength={30}
              id="sposti"
              value={form.sposti}
              onChange={(e) => updateForm({ sposti: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {eSposti}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Paikkakunta</Form.Label>
            <Form.Control
              required
              placeholder="Paikkakunta"
              maxLength={30}
              id="paikkakunta"
              value={form.paikkakunta}
              onChange={(e) => updateForm({ paikkakunta: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {ePaikkakunta}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Maa</Form.Label>
            <Form.Control
              as="select"
              custom
              required
              id="maa" 
              value={form.maa}
              onChange={(e) => updateForm({ maa: e.target.value })}
            >
              <option value={""}>Valitse maa</option>
              <option value="Suomi">Suomi</option>
              <option value="Ulkomailla">Ulkomailla</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {eMaa}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Esittely</Form.Label>
              <Form.Control
              required
              as="textarea"
              placeholder="Kirjoita esittely"
              rows={7}
              maxLength={250}
              id="bio"
              value={form.bio}
              onChange={(e) => updateForm({ bio: e.target.value }, setCharacterCount(e.target.value.length))}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {eBio}
              </Form.Control.Feedback>
              <p className="counter-text">{characterCount} / 250</p>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Salasana</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Salasana"
              maxLength={30}
              id="salasana"
              value={form.salasana}
              onChange={(e) => updateForm({ salasana: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {eSalasana}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridLocation2">
            <Form.Label>Salasanan vahvistus</Form.Label>
            <Form.Control
              required
              placeholder="Vahvista salasana"
              maxLength={30}
              id="salasana"
              value={form.salasana}
              onChange={(e) => updateForm({ salasana: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {eSalasana}
            </Form.Control.Feedback>
          </Form.Group> */}
          
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

const SetUser = () => {
  let registered = localStorage.getItem("token");
  let registeredUser = JSON.parse(registered);
  let userdata = registeredUser.j;

  return (
    <>{userdata}</>
  )
} 

// const GetUserData = () => {
//   let getData = localStorage.getItem("token-info");
//   let parseInfo = JSON.parse(getData);
//   let uname = parseInfo.nimimerkki;
//   let name = parseInfo.etunimi;
//   let surname = parseInfo.sukunimi;
//   let postal = parseInfo.paikkakunta;
//   let country = parseInfo;

//   return (
//     <>{uname}, {name}, {surname}, {postal}, {country}
//     </>
//   )
// }

export { SetUser }

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
