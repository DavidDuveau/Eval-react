import React, { Component } from "react";
class FormAttraction extends Component {
  initialState = {
    attractionName: "",
    attractionDesc: "",
    AttractionDifficulty: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAttraction(
      this.state.attractionName,
      this.state.attractionDesc,
      this.state.AttractionDifficulty
    );
    this.setState(this.initialState);
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>Ajout d'une attraction</legend>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <label htmlFor="attractionName">Nom de l'attraction</label>
                <input
                  type="text"
                  name="attractionName"
                  value={this.state.attractionName}
                  id="attractionName"
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor="attractionDesc">
                  Description de l'attraction
                </label>
                <textarea
                  name="attractionDesc"
                  value={this.state.attractionDesc}
                  id="attractionDesc"
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <div>
                <label htmlFor="AttractionDifficulty">Difficulté</label>
                <select
                  type="text"
                  name="AttractionDifficulty"
                  value={this.state.AttractionDifficulty}
                  id="AttractionDifficulty"
                  onInput={this.handleChange}
                >
                  <option>- Choisissez un difficulté -</option>
                  <option value="Facile">Facile</option>
                  <option value="Moyen">Moyen</option>
                  <option value="Difficile">Difficile</option>
                </select>
              </div>

              <button type="submit">Envoyer</button>
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}
export default FormAttraction;
