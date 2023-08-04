import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import useProductContext from "../contexts/ProductContext";
import FormatPrice from "../helpers/FormatPrice";
import "./css/SingleProduct.css"

const API = "https://smcompzone-api.onrender.com/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  useEffect(() => {
    window.scroll(0, 0);
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  return (
    <div className="wrapper center">
      {isSingleLoading || !singleProduct ? (
        <LoadingScreen />
      ) : (
        <div className="container">
          <div id="single-product-card" className="center">
            <div className="product-image">
              <img src={singleProduct.image} alt="" />
            </div>
            <div className="product-details py-8">
              <div className="product-name">
                <h1 className="name text-xl my-1">{singleProduct.name}</h1>
              </div>
              <div className="product-desc">
                <p className="description my-1">{singleProduct.description}</p>
              </div>
              <div className="price flex">
                <h4 className="font-bold">Price :</h4><span className="ms-3 font-bold text-gray"><FormatPrice price={singleProduct.price} /></span>
              </div>

              <div className="warranty-period flex my-2">
                <h4 className="font-bold">Warranty</h4>
                <p className="warranty ms-1">2 Years Domestic Warranty</p>
              </div>

              <div className="other-details py-2 my-4" style={{borderBottom:"2px solid black", borderTop:"2px solid black"}}>
                <div className="product-id">
                  <h6 className="font-bold">Available: In stock</h6>
                  <h6 className="font-bold">Product ID: {singleProduct.id}</h6>
                  <h6 className="font-bold">
                    Product Category: {singleProduct.category}
                  </h6>
                  <h6 className="font-bold">
                    Product Brand: {singleProduct.brand}
                  </h6>
                </div>
              </div>
             <div className="product-color">
             <div className="color"> <span className="font-bold">Color:</span> Black </div>
             </div>
             <div className="product-button">
             <button className="btn">Add to Cart</button>
             </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
