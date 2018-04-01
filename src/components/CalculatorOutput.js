import React, {Component} from 'react';

class CalculatorOutput extends Component {
  render() {
    return (
      <div className="CalculatorOutput">
        {this.props.output
          ? this.props.output
          : 0}
      </div>
    );
  }
}

export default CalculatorOutput;