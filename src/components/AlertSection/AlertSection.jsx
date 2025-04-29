import React, { Component } from "react";
import alertSec from "../Resources/NewImages/NewFolder10/logo_arc__cqzlb6z7yfo2_large.jpg";

class AlertSection extends Component {
  render() {
    return (
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-title">
            <img src={alertSec} />
          </div>
          <div className="alert-text">
            Donate to 2025 Southern California wildfires
          </div>
        </div>
      </section>
    );
  }
}
export default AlertSection;
