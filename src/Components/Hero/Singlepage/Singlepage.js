import "./Singlepage.css"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Singlepage() {
  const { id } = useParams(); 

  // State to store the data of the single product
  const [productData, setProductData] = useState(null);

  // Fetch the data of the single product using the "id" parameter
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const responseData = await response.json();
        if (responseData) {
          setProductData(responseData);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);
  return (
    <div>
      {productData ? (
        <section className="py-5" style={{minHeight:"80vh"}}>
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img className="card-img-top mb-5 mb-md-0" src={productData.image} alt="Product" />
              </div>
              <div className="col-md-6">
                <div className="small mb-1">Product: {productData.id}</div>
                <h1 className="display-5 fw-bolder" style={{textAlign:"start", fontSize:"2rem"}}>{productData.title}</h1>
                {/* <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through">${productData.price}</span>
                  <span>${productData.price}</span>
                </div> */}
                <p className="lead" style={{textAlign:"start"}}>{productData.description}</p>
                <div className="d-flex">
                <span className="m-3">${productData.price}</span>
                  {/* <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} /> */}
                  {/* <button className="btn btn-outline-dark flex-shrink-0" type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Render a loading message or spinner while fetching data
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Singlepage;
