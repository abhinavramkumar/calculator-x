import React, {Component} from 'react';

class CalculatorInput extends Component {
  onChange = e => {
    let input = e.target.value;
    this
      .props
      .onChange(input);
  }

  render() {
    return (
      <div className="CalculatorInput">
        <input
          className="CalculatorInput__input"
          type="text"
          onChange={this.onChange}
          value={this.props.input}/>
      </div>
    );
  }
}

export default CalculatorInput;