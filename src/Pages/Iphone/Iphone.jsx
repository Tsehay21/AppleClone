import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getIphoneData() {
      try {
        const response = await fetch("/iphone.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getIphoneData();
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">iPhone</h1>
              <div className="bries-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((singleProduct, index) => {
            let id = singleProduct.product_id;
            let img = singleProduct.product_img;
            let name = singleProduct.Product_name;
            let Brief = singleProduct.product_brief_description;
            let StartPrice = singleProduct.starting_price;
            let PriceRange = singleProduct.price_range;
            let productPage = "/iphone/" + id;

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 mb-4"
              >
                {/* Product Information Column */}
                <div
                  className={`col-12 col-md-6 my-auto order-2 order-md-${
                    index % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <div className="product-title">
                    {<h1 className="font-weight-bold">{name}</h1>}
                  </div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">{`Starting at ${StartPrice}`}</div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Product Image Column */}
                <div
                  className={`col-12 col-md-6 order-1 order-md-${
                    index % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="product-image">
                    <img
                      src={img}
                      alt="product"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                        height: "300px",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
