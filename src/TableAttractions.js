import React, { Component } from "react";
class TableAttraction extends Component {
  render() {
    const attractionsTable = this.props.attractionsArray.map(
      (attraction, attractionIndex) => {
        const tdClass =
          attraction.difficulty == "Difficile"
            ? "hard"
            : attraction.difficulty == "Moyen"
            ? "medium"
            : "easy";
        return (
          <tr key={attractionIndex}>
            <td>{attraction.name}</td>
            <td>{attraction.description}</td>
            <td className={tdClass}>{attraction.difficulty}</td>
            <td>
              <div className="button-container2">
                <button
                  onClick={() => this.props.removeAttraction(attractionIndex)}
                >
                  X
                </button>
              </div>
            </td>
          </tr>
        );
      }
    );
    return (
      <table>
        <thead>
          <tr>
            <th>Attraction</th>
            <th>Description</th>
            <th>Difficulté</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>{attractionsTable}</tbody>
      </table>
    );
  }
}
export default TableAttraction;
