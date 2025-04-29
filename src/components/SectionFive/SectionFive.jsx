import React, { Component } from "react";

class SectionFive extends Component {
  render() {
    return (
      <section className="fifth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                {/* <!-- <div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src="images/icons/apple-tv-logo.png">
							</div>
						</div> --> */}

                {/* <!-- <div className="tvshow-logo-wraper">
							<img src="images/home/banker.png">
						</div> --> */}
                <div className="title-wraper white">AirPods Pro 2</div>
                <div className="description-wrapper">
                  Now with a Hearing Aid feature.<sup>1</sup>
                </div>
                <button className="sixth_btn">Learn more</button>
                <button className="sixth_right_btn">Buy</button>
                {/* <!-- 
						<div className="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div> --> */}
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                {/* <!-- <div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src="images/icons/watch-series5-logo.png">
							</div>
						</div> --> */}

                <div className="title-wraper white">AirPods 4</div>
                <div className="description-wraper">
                  Iconic.Now supersonic.
                  <br />
                  Available with Active Noise Cancellation.<sup>2</sup>
                </div>
                <button className="sixth_btn">Learn more</button>
                <button className="sixth_right_btn">Buy</button>
                {/* <!-- <div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
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
export default SectionFive;
