import React, { Component } from "react";

class SectionOne extends Component {
  render() {
    return (
      <section className="first-highlight-wrapper">
        <div className="container">
          <div className="title-wraper bold black">iPhone 16 Pro</div>
          <div className="new-alert">Hello,Apple Intelligence.</div>
          <button className="sixth_btn">Learn more</button>
          <button className="sixth_right_btn">Buy</button>
          {/* <!-- <div className="links-wrapper">
				<ul>

					<li><a href="">Learn more</a></li>

					<li><a href="">Buy</a></li>
				</ul>
			</div> --> */}

          {/* <!-- <div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div> --> */}
        </div>
      </section>
    );
  }
}
export default SectionOne;
