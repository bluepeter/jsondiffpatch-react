import React, { Component } from "react";
import PropTypes from "prop-types";
import JsonDiffReact from "../../src/jsondiff-for-react";

class Main extends Component {
  static propTypes = {
    children: PropTypes.object,
  };
  render() {
    const left = { a: 1, c: 1 };
    const right = { a: 1, b: 2 };
    return <JsonDiffReact left={left} right={right} />;
  }
}
export default Main;
