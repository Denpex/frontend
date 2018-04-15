import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import PropTypes from "prop-types";
import FieldSquare from "./FieldSquare";
import Player from "./Player";
import Ball from "./Ball";
import { range } from "../logic/Helpers";

class Field extends React.Component {
  renderPiece(x, y) {
    let result = null;

    const { teams, ball } = this.props.gameObjects;

    if (ball.position[0] === x && ball.position[1] === y) {
      result = <Ball />
    }

    const players = teams.reduce((a, b) => a.players.concat(b.players));
    let player = players.find(p => p.position[0] === x && p.position[1] === y);

    if (player) {
      result = <Player
        team={teams.find(t => t.players.includes(player)).name}
        number={player.number} />;
    }

    return result;
  }

  renderRow(row) {
    const columns = range(0, 25).map(column =>
    {
      return (
        <FieldSquare key={column + row} column={column} row={row}>
          {this.renderPiece(column, row)}
        </FieldSquare>
      );
    });
    
    return <div key={row} className="row">{columns}</div>;
  }
  render() {
    const rows = range(0, 17).map(row => this.renderRow(row));
    return <div className="container">{rows}</div>;
  }
}

Field.propTypes = {
  gameObjects: PropTypes.object.isRequired
};

export default DragDropContext(HTML5Backend)(Field);
