import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => setCountries(response));
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  return (
    <div className="App">
      {modal && (
        <Card className="modal" style={{ width: "18rem" }}>
          <Card.Img
            className="modalImg"
            variant="top"
            src="holder.js/100px180?text=Image cap"
          />
          <Card.Body className="modalBody">
            <Card.Title className="modalTitle">sdasd</Card.Title>
            <Card.Text className="modalText">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="modalListGroupItem">
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem className="modalListGroupItem">
              Dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem className="modalListGroupItem">
              Vestibulum at eros
            </ListGroupItem>
          </ListGroup>
          <Button className="modalButton" onClick={toggleModal}>
            Close
          </Button>
        </Card>
      )}
      {countries.map((country) => {
        return (
          <Col
            onClick={toggleModal}
            className="colClass"
            key={country.name.common}
          >
            <Card className="cardClass">
              <Card.Img
                className="imgClass"
                variant="top"
                alt={country.name.common}
                src={country.flags.svg}
              />
              <Card.Body className="cardBodyClass">
                <Card.Title className="cardTitleClass">
                  <b>Name:</b> {country.name.common}
                </Card.Title>
                <Card.Text className="cardTextClass">
                  <b>Capital:</b> {country.capital}
                </Card.Text>
                <Card.Text className="cardTextClass">
                  <b>Region:</b> {country.region}
                </Card.Text>
                <Card.Text className="cardTextClass">
                  <b>Population:</b> {country.population}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </div>
  );
}

export default App;
