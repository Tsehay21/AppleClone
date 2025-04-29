import React, { Component } from "react";

class SectionFour extends Component {
  render() {
    return (
      <section className="fourth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPad Pro</div>
                <div className="description-wraper">
                  Unbelievably thin. Incredibly powerful.
                </div>
                <button className="sixth_btn">Learn more</button>
                <button className="sixth_right_btn">Buy</button>
                {/* <!-- <div className="price-wrapper">
							From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
						</div> --> */}

                {/* <!-- <div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Apply now</a></li>
							</ul>
						</div> --> */}
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">MacBook Pro</div>
                <div className="description-wraper">A work of smart</div>
                <button className="sixth_btn">Learn more</button>
                <button className="sixth_right_btn">Buy</button>
                {/* <!-- <div className="links-wrapper white">
							<ul>
								<li><a href="">Watch the PSA</a></li>
							</ul>
						</div> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionFour;
