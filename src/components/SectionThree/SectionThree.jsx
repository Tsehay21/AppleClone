import React, { Component } from "react";
import largImage from "../Resources/NewImages/NewFolder5/hero_logo_apple_watch_series_10__dla4dkv1wfue_large.png";

class SectionThree extends Component {
  render() {
    return (
      <section className="third-highlight-wrapper">
        <div className="container">
          <div className="title-wrapper bold">
            <img src={largImage} />
          </div>

          <div className="description-wrapper">Thinstant classic.</div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
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
      </section>
    );
  }
}
export default SectionThree;
