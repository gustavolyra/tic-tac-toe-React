import React, { Component } from 'react';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default class Board extends Component {
  renderSquare(i) {
    const key = 'square' + i;
    return (
      <Square
        key={key}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRowComponents(i) {
    const components = [0 + i, 1 + i, 2 + i];
    return (
      <div key={'row' + i} className="board-row">
        {components.map((row) => {
          return this.renderSquare(row);
        })}
      </div>
    );
  }

  render() {
    const rows = [0, 3, 6];
    return (
      <div>
        {rows.map((row) => {
          return this.renderRowComponents(row);
        })}
      </div>
    );
  }
}
