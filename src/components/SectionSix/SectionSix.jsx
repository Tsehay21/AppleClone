import React, { Component } from "react";
import secondPic from "../Resources/NewImages/NewFolder6/promo_logo_iphone_tradein__7y3gtai5az66_large.png";
import thirdPic from "../Resources/NewImages/NewFolder7/logo__dcojfwkzna2q_large1.png";

class SectionSix extends Component {
  render() {
    return (
      <section className="sixth1-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={secondPic} />
                  </div>
                </div>
                <div className="description-wraper white">
                  Get $180-$650 in credit when yo trade in iPhone 12 or higher.
                  <sup>3</sup>
                </div>
                {/* <!-- <div className="links-wrapper">
							<<ul>
								<li><a href="">Play now<sup>2</sup></a></li>
								<li><a href="">Learn about Apple Arcade</a></li>
							</ul>>
						</div> --> */}
                <button className="sixth_btn"> Get your estimate</button>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                {/* <!-- <div className="title-wraper">
							Apple Card Monthly Installments
						</div> --> */}
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={thirdPic} />
                  </div>
                </div>
                <div className="description-wraper">
                  Get up to 3% Dail Cash black
                  <br />
                  with every purchase.
                </div>
                <button className="sixth_btn">Learn more</button>
                <button className="sixth_right_btn">Apply now</button>
                {/* <!-- <div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Apply now</a></li>
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
export default SectionSix;
