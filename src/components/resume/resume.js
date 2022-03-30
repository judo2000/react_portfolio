import React, { Component } from "react";
import Pdf from "./Stephen_Scott_Moore_resume.pdf";

class Download extends Component {
  render() {
    return (
      <div className="App">
        <a href={Pdf} target="_blank">
          My Resume
        </a>
      </div>
    );
  }
}

export default Download;
