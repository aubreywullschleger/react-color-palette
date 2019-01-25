import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ColorOption(props) {
  return (
    <button
      className="color-option"
      value={props.value}
      style={{ backgroundColor: props.value }}
      onClick={props.onClick}
    >
    </button>
  )
}

function ColorSelection(props) {
  return (
    <div
      className="color-selection"
      style={{ backgroundColor: props.value }}
    >
      <h1>{props.value}</h1>
    </div>
  )
}

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOptions: ['red', 'green', 'blue', 'yellow'],
      colorSelection: '',
    }
    // this.colorOptionsList = this.colorOptionsList.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  colorOptionsList() {
    return this.state.colorOptions.map(color => {
        return (
          <ColorOption
            key={color}
            value={color}
            onClick={(e) => this.handleClick(e)}
          />
        );
      }
    );
  }

  handleClick(e) {
    this.setState({ colorSelection: e.target.value }) 
  }

  render() {
    return (
      <main className="palette">
        <section className="color-choices">
          <h1>Choose a color:</h1>
          {this.colorOptionsList()}
        </section>
        <section className="color-choice-container">
          <h1>Color choice:</h1>
          <ColorSelection value={this.state.colorSelection} />
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <Palette />,
  document.getElementById('root')
);