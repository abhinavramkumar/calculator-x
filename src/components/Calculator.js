import React, { Component } from "react";
import CalculatorInput from "./CalculatorInput";
import CalculatorOutput from "./CalculatorOutput";
import * as mathjs from "mathjs";
import {
  setInput__State,
  appendInput__State,
  setOutput__State,
  setError__State,
  resetAll__State
} from "../stateChanges/stateChanges";

class Calculator extends Component {
  state = {
    input: "",
    output: 0,
    error: undefined,
    isCheatsheetShown: true
  };

  onChange = input => {
    if (/([<:,&$#@\"\'\\a-fh-kmp-zA-FH-KMP-Z>])/g.test(input)) {
      input = input.replace(/([<:,&$#@>\"\'\\a-fh-kmp-zA-FH-KMP-Z])/g, "");
    }

    this.setState(setInput__State(input));
    this.computeResult(input);
  };

  onControlButtonClick = e => {
    const control = e.target.getAttribute("data-control");
    let input = "";

    switch (control) {
      case "pi":
        input = String(Math.PI.toFixed(8));
        break;

      case "log":
        input = "log(";
        break;

      case "ln":
        input = "ln(";
        break;

      case "inverse":
        input = "^(-1)";
        break;

      default:
        break;
    }

    if (control !== "log" && control !== "ln") {
      this.setState(appendInput__State(input));
      this.computeResult(this.state.input + input);
    } else {
      this.computeResultLog(control);
    }
  };

  computeResult = input => {
    try {
      if (mathjs.eval(input)) {
        let formattedOutput = Number(mathjs.eval(input)).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 0,
            maximumFractionDigits: 9
          }
        );

        this.setState(setOutput__State(formattedOutput));
      } else {
        this.setState(setOutput__State(0));
        throw new Error("ERROR: ");
      }
    } catch (err) {
      this.setState(setError__State(err.message));
    }
  };

  computeResultLog = control => {
    let input = this.state.input;
    if (/([\+\*\/\%()\^\.])/g.test(input)) {
      input = String(mathjs.eval(input));
    }
    try {
      if (control == "log") {
        if (mathjs.log(input, 10)) {
          let formattedOutput = Number(mathjs.log(input, 10)).toLocaleString(
            "en-US",
            {
              minimumFractionDigits: 0,
              maximumFractionDigits: 9
            }
          );
          this.setState(setOutput__State(formattedOutput));
        } else {
          this.setState(setOutput__State(0));
          throw new Error("ERROR: ");
        }
      } else {
        if (mathjs.log(input, 2.71828)) {
          let formattedOutput = Number(
            mathjs.log(input, 2.71828)
          ).toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 9
          });
          this.setState(setOutput__State(formattedOutput));
        } else {
          this.setState(setOutput__State(0));
          throw new Error("ERROR: ");
        }
      }
    } catch (err) {
      this.setState(setError__State(err.message));
    }
  };

  clearState = e => {
    e.preventDefault();
    this.setState(resetAll__State());
  };

  render() {
    return (
      <div className="Calculator">
        <div className="container">
          <div className="Calculator__container">
            <CalculatorOutput output={this.state.output} />

            <div className="Calculator__control-container">
              <div className="Calculator__control">
                <button
                  className="Calculator__control-buttons"
                  data-control="log"
                  onClick={this.onControlButtonClick}
                >
                  log
                </button>
                <button
                  className="Calculator__control-buttons"
                  data-control="ln"
                  onClick={this.onControlButtonClick}
                >
                  ln
                </button>
                <button
                  className="Calculator__control-buttons"
                  data-control="inverse"
                  onClick={this.onControlButtonClick}
                >
                  inverse
                </button>
                <button
                  className="Calculator__control-buttons"
                  data-control="pi"
                  onClick={this.onControlButtonClick}
                >
                  pi
                </button>
              </div>
            </div>

            <div className="Calculator__input-container">
              <CalculatorInput
                onChange={this.onChange}
                input={this.state.input}
              />
              <button className="Calculator__clear" onClick={this.clearState}>
                <i className="fas fa-sync-alt" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
