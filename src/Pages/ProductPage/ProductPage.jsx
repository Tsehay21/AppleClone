import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function ProductPage() {
  const [product, setProduct] = useState([]);
  //console.log(useParams());
  const { productID } = useParams();
  //const [product, setProduct] = useState(null);

  // console.log("Product ID from URL:", productID);

  useEffect(() => {
    // fetch("http://localhost:3001/iphone") // after we copied to our public folder we can get our data from here.
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((products) => {
        //console.log(products);

        const productList = products.products;

        console.log("Fetched Products:", productList);

        const singleProduct = productList.filter(
          (product) => product.product_id == productID
        );

        // If no product is found, set product to null
        //         if (!singleProduct) {
        //           setProduct(null);
        //         } else {
        //           setProduct(singleProduct);
        //         }

        console.log("Filtered Product:", singleProduct);

        setProduct(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID]);

  //   // If the product is not found, return the Four04 component
  //   if (product === null) {
  //     return <Four04 />;
  //   }

  console.log(product);

  if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {product?.map((singleProduct) => {
              //// let id = singleProduct.product_id;
              // // let title = singleProduct.product_name;
              ////OR
              const {
                product_id: id,
                Product_name: title,
                product_img: img,
                product_brief_description: Brief,
                starting_price: StartPrice,
                price_range: PriceRange,
                product_description: details,
              } = singleProduct;

              return (
                <div key={id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <h1 className=" font-weight-bold"> {title}</h1>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>
                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className="col-sm-12 col-md-6 my-auto">
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="product-image">
                        <img src={img} className="img-fluid" alt="product" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default ProductPage;
