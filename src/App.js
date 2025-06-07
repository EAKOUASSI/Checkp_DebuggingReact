import "./App.css";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Importation des images
import Riri0 from "./Rimages/Riri0.jpg";
import Riri1 from "./Rimages/Riri1.jpg";
import Riri_1 from "./Rimages/Riri01.webp";
import Riri2 from "./Rimages/Riri2.webp";
import Riri3 from "./Rimages/Riri 33.webp";
import Riri4 from "./Rimages/Riri 4.jpg";
import Riri5 from "./Rimages/Riri 51.jpg";
import Riri6 from "./Rimages/Riri6.jfif";
import Riri7 from "./Rimages/Riri7.jpg";
import Riri8 from "./Rimages/Riri8.webp";
import Riri9 from "./Rimages/Riri9.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: `Rihanna`,
        images: [
          Riri1,
          Riri_1,
          Riri0,
          Riri2,
          Riri3,
          Riri4,
          Riri5,
          Riri6,
          Riri7,
          Riri8,
          Riri9
        ],
        fullName: "Robyn Rihanna Fenty",
        pseudonyme: `BadGalRi`,
        naissance: `20 Février 1988`,
        lieu: `Saint Michael (Barbade)`,
        nationalité: `Barbadienne`,
        taille: `1m73`,
        profession: "Artiste",
        webSite0: `https://www.Rihanna.com`,
        webSite1: `https://www.fentybeauty.com`,
        webSite2: `https://www.savagex.com`,
        discographie: `https://en.wikipedia.org/wiki/Rihanna_discography`,
        description:
          "Chanteuse, actrice et femme d'affaire fondatrice de l'empire FENTY, Rihanna est une célébrité Barbadienne agé de 37 ans ayant marqué les âges de par son talent et son charisme sans équivoque."
      },
      shows: false,
      chronomètre: 0
    };
  }

  // Méthode pour faire basculer(toogle) la visibiliter du profile
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  //  Méthod de cycle de vie pour démarrer le chronomètre lorsque le composant est monté (mount)
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        chronomètre: prevState.chronomètre + 1
      }));
    }, 1000);
  }

  //Affichage temps mm:ss
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  // Déclencher une alerte après 30s
  componentDidUpdate(prevProps, prevState) {
    if (prevState.chronomètre < 30 && this.state.chronomètre >= 30) {
      alert("Bravo, le composant est monté depuis 30 secondes !");
    }
  }

  // Compteur remis à 0 lorsque le composant est démonté(unmounts)
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, shows, chronomètre } = this.state;

    return (
      <div className="App">
        <Button
          style={{ backgroundColor: "maroon", border: "maroon" }}
          onClick={this.toggleShow}
          variant="primary"
        >
          {shows ? "Cacher Bio." : "Montrer Bio."}
        </Button>

        {shows && (
          <Card
            style={{
              fontFamily: "Roboto Serif",
              fontSize: 14,
              width: "19rem",
              height: "35rem",
              margin: "0 auto",
              boxShadow: "0px 4px 8px rgba(194, 13, 12, 0.5)"
            }}
          >
            <Card.Title
              style={{
                textAlign: "center",
                fontFamily: "DM",
                backgroundColor: "#c20d0c",
                margin: 0
              }}
            >
              {person.name}
            </Card.Title>
            <Carousel>
              {person.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Rihanna ${index + 1}`}
                    style={{ height: "200px", weight: 100 }}
                    onError={(e) => {
                      console.error(
                        `Erreur de chargement de l’image : ${image}`
                      );
                      e.target.src =
                        "https://via.placeholder.com/200x100?text=Erreur";
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body
              style={{
                maxHeight: "20rem",
                overflowY: "auto",
                scrollbarColor: "maroon transparent"
              }}
            >
              <Card.Text>
                <strong>Nom Civile: </strong>
                {person.fullName}
              </Card.Text>
              <Card.Text>
                <strong>Pseudonyme: </strong>
                {person.pseudonyme}
              </Card.Text>
              <Card.Text>
                <strong>Naissance: </strong>
                {person.naissance}
              </Card.Text>
              <Card.Text>
                <strong>Lieu: </strong>
                {person.lieu}
              </Card.Text>
              <Card.Text>
                <strong>Nationnalité: </strong>
                {person.nationalité}
              </Card.Text>
              <Card.Text>
                <strong>Taille: </strong>
                {person.taille}
              </Card.Text>
              <Card.Text>
                <strong>Profession: </strong>
                {person.profession}
              </Card.Text>
              <Card.Text style={{ textAlign: `center` }}>
                <strong>Description: </strong> <br />
                {person.description}
              </Card.Text>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "flex-start",
                  padding: "10px"
                }}
              >
                <strong>Sites Webs:</strong>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>
                    <a
                      href={person.webSite0}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "maroon", textDecoration: "none" }}
                    >
                      www.Rihanna.com
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.webSite1}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "violet", textDecoration: "none" }}
                    >
                      www.fentybeauty.com
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.webSite2}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "violet", textDecoration: "none" }}
                    >
                      www.savagex.com
                    </a>
                  </li>
                </ul>
              </div>

              <Card.Text style={{ textAlign: `center` }}>
                <a
                  href={person.discographie}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "crimson" }}
                >
                  Discographie de Rihanna
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: `center` }}>
              Temps écoulé après montage: <br />{" "}
              <span style={{ color: "red" }}>
                {this.formatTime(chronomètre)}
              </span>{" "}
              <div>
                {/*Réinitialiser le compteur*/}
                <Button
                  variant="secondary"
                  onClick={() => this.setState({ chronomètre: 0 })}
                  style={
                    ({ marginTop: "7px" },
                    { backgroundColor: "rgba(251, 87, 87, 0.57)" })
                  }
                >
                  ⏳
                </Button>
              </div>
            </Card.Footer>
          </Card>
        )}
      </div>
    );
  }
}

export default App;
