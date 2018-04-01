import React, { Component } from "react";

class Cheatsheet extends Component {
  render() {
    return (
      <div
        className={
          "Cheatsheet" + (this.props.isCheatsheetShown ? " active" : "")
        }
      >
        <div className="Cheatsheet-Header">
          <h5>Cheatsheet</h5>
        </div>
        <div className="Cheatslist">
          <div className="Cheat">
            <div className="Cheat-Symbol">/, *, +, -</div>
            <div className="Cheat-Description">
              Division, Multiplication, Addition, Subtraction
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cheatsheet;
