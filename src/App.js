import React, { Component } from "react";
import image from "./images/table-ronde.jpg";
import "./App.css";
import TableAttraction from "./TableAttractions";
import FormParc from "./FormParc";
import FormAttraction from "./FormAttraction";

class App extends Component {
  state = {
    nom: "Les Chevaliers de la Table Ronde",
    theme: "Parc sur le thème des légendes arthuriennes",
    isParcButtonClicked: false,
    isAttractionButtonClicked: false,
    attractions: [
      {
        name: "L'île d'AValon",
        description:
          "Arthur est perdu sur l'île, résouds le labyrinthe pour le trouver et le sauver",
        difficulty: "Facile",
      },
      {
        name: "L'épée dans la pierre",
        description: "Est tu digne de retirer Excalibur ?",
        difficulty: "Difficile",
      },
      {
        name: "Aux créneaux !",
        description: "Repousse l'envahiseur saxon depuis le haut des remparts",
        difficulty: "Moyen",
      },
      {
        name: "Lac d'Avalon",
        description: "Balade en barque sur le magnifique lac d'Avalon",
        difficulty: "Facile",
      },
      {
        name: "Les potions de Merlin",
        description:
          "Viens boire un breuvage secret dans le laboratoire secret de Merlin",
        difficulty: "Facile",
      },
      {
        name: "Le sortilège",
        description: `Merlin veux vous montrer sont tout dernier sort, 
        la téléportation ! Mais personne ne l'a encore testé, 
        serrez vous assez courageux ?`,
        difficulty: "Difficile",
      },
    ],
  };

  handleParcButtonclick = () => {
    this.setState(
      { isParcButtonClicked: !this.state.isParcButtonClicked },
      this.setState({ isAttractionButtonClicked: false })
    );
  };

  handleAttractionButtonclick = () => {
    this.setState(
      {
        isAttractionButtonClicked: !this.state.isAttractionButtonClicked,
      },
      this.setState({ isParcButtonClicked: false })
    );
  };

  updateParc = (nom, theme) => {
    if (window.confirm("Voulez vous changer les données du parc ?")) {
      this.setState({
        nom: nom,
      });
      this.setState(
        {
          theme: theme,
        },
        this.handleParcButtonclick()
      );
    }
  };

  removeAttraction = (index) => {
    if (window.confirm("Voulez vous supprimer cette attraction")) {
      this.setState({
        attractions: this.state.attractions.filter((attraction, i) => {
          return i !== index;
        }),
      });
    }
  };

  addAttraction = (nom, desc, diff) => {
    this.setState(
      {
        attractions: [
          ...this.state.attractions,
          { name: nom, description: desc, difficulty: diff },
        ],
      },
      this.handleAttractionButtonclick()
    );
  };

  render() {
    const wichform = this.state.isParcButtonClicked ? (
      <div>
        <h1>{this.state.nom}</h1>
        <p>{this.state.theme}</p>

        <div className="button-container">
          <button onClick={this.handleParcButtonclick}>Retour</button>
        </div>

        <FormParc updateParc={this.updateParc} />
        <img
          src={image}
          alt="Le roi Arthur et ses chevaliers"
          className="img-app"
        />
      </div>
    ) : (
      <div>
        <h1>{this.state.nom}</h1>
        <p>{this.state.theme}</p>

        <TableAttraction
          attractionsArray={this.state.attractions}
          removeAttraction={this.removeAttraction}
        />
        <div className="button-container">
          <button onClick={this.handleParcButtonclick}>Changer le parc</button>
        </div>

        <div className="button-container">
          <button onClick={this.handleAttractionButtonclick}>
            Ajouter une attraction
          </button>
        </div>

        <img
          src={image}
          alt="Le roi Arthur et ses chevaliers"
          className="img-app"
        />
      </div>
    );
    return this.state.isAttractionButtonClicked ? (
      <div>
        <h1>{this.state.nom}</h1>
        <p>{this.state.theme}</p>

        <div className="button-container">
          <button onClick={this.handleAttractionButtonclick}>retour</button>
        </div>
        <FormAttraction addAttraction={this.addAttraction} />
        <img
          src={image}
          alt="Le roi Arthur et ses chevaliers"
          className="img-app"
        />
      </div>
    ) : (
      wichform
    );
  }
}

export default App;
