import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Jsondiffpatch from "jsondiffpatch";
import "jsondiffpatch/dist/formatters-styles/html.css";
import "jsondiffpatch/dist/formatters-styles/annotated.css";

const formatters = Jsondiffpatch.formatters;

class JsonDiffReact extends Component {
  static propTypes = {
    right: PropTypes.any,
    left: PropTypes.any,
    show: PropTypes.bool,
    annotated: PropTypes.bool,
    tips: PropTypes.any,
    objectHash: PropTypes.func,
  };
  render() {
    const {
      right,
      left,
      show = true,
      annotated = false,
      tips = "Both objects are identical.",
      objectHash,
    } = this.props;
    const delta = Jsondiffpatch.create({
      objectHash,
    }).diff(left, right);
    const html = annotated
      ? formatters.annotated.format(delta)
      : formatters.html.format(delta, left);
    show ? formatters.html.showUnchanged() : formatters.html.hideUnchanged();
    return html ? (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    ) : typeof tips === "string" ? (
      <p style={{ fontSize: 12, color: "#999" }}>{tips}</p>
    ) : (
      tips
    );
  }
}
export default JsonDiffReact;
