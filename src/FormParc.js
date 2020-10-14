import React, { Component } from "react";
class FormParc extends Component {
  initialState = {
    inputNameParc: "Les Chevaliers de la Table Ronde",
    inputDescParc: "Parc sur le thème des légendes arthuriennes",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateParc(this.state.inputNameParc, this.state.inputDescParc);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>Update du parc</legend>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <label htmlFor="inputNameParc">Nom du parc</label>
                <input
                  type="text"
                  name="inputNameParc"
                  value={this.state.inputNameParc}
                  id="inputNameParc"
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor="inputDescParc">Description du parc</label>
                <textarea
                  name="inputDescParc"
                  value={this.state.inputDescParc}
                  id="inputDescParc"
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <button type="submit">Envoyer</button>
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}
export default FormParc;
