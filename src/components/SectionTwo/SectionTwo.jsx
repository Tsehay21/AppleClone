import React, { Component } from "react";

class SectionTwo extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
        <div className="container">
          {/* <!-- <div className="new-alert">
				New
			</div> --> */}

          <div className="title-wraper iphonSix bold black">iPhone 16</div>

          <div className="description-wrapper black">
            Hello,Apple Intelligence.
          </div>
          <button className="sixth_btn">Learn more</button>
          <button className="sixth_right_btn">Buy</button>
          {/* <!-- <div className="price-wrapper grey">
				From $999.
			</div> --> */}

          {/* <!-- <div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul>
			</div> --> */}
        </div>
      </section>
    );
  }
}
export default SectionTwo;
