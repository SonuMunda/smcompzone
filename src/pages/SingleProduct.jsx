import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import useProductContext from "../contexts/ProductContext";
import FormatPrice from "../helpers/FormatPrice";
import "./css/SingleProduct.css";
import PageNavigation from "../components/PageNavigation";
import { FaStar } from "react-icons/fa";

const API = "https://smcompzone-api.onrender.com/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  console.log(singleProduct);
  useEffect(() => {
    window.scroll(0, 0);
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  return (
    <div className="wrapper center flex-col">
      {isSingleLoading || !singleProduct ? (
        <LoadingScreen />
      ) : (
        <>
          <PageNavigation title={singleProduct.name} />
          <section className="single-product center">
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
                    <p className="description my-1">
                      {singleProduct.description}
                    </p>
                  </div>
                  <div className="rating-reviews flex items-center my-2">
                    <h4 className="ratings center bg-violet-800 text-white px-1 rounded">
                      {singleProduct.ratings}
                      <span className="text-sm mx-1">
                        <FaStar />
                      </span>
                    </h4>
                    <p className="mx-2">
                      ({singleProduct.reviews}) customer reviews
                    </p>
                  </div>
                  <div className="price">
                    <h4 className="font-bold price-heading">Special Price</h4>
                    <div className="price-details flex items-center">
                      <div className="descounted-price font-bold font-bold text-xl">
                        <FormatPrice price={singleProduct.price} />
                      </div>
                      <div className="original-price mx-4">
                        <del>
                          <p>
                            <FormatPrice
                              price={
                                singleProduct.price +
                                (singleProduct.price * 35) / 100
                              }
                            />
                          </p>
                        </del>
                      </div>
                      <p>35% off</p>
                    </div>
                  </div>

                  <div className="warranty-period flex my-2">
                    <h4 className="font-bold text-gray">Warranty :</h4>
                    <p className="warranty ms-1">2 Years Domestic Warranty</p>
                  </div>

                  <div
                    className="other-details py-2 my-4"
                    style={{
                      borderBottom: "2px solid black",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className="product-id">
                      <h6 className="font-bold">
                        
                        <span className="text-gray mr-2">Available:</span>
                        {singleProduct.stock == true
                          ? "In Stock"
                          : "Out of Stock"}
                      </h6>
                      <h6 className="font-bold">
                        <span className="text-gray mr-2">Product ID:</span>
                        {singleProduct.id}
                      </h6>
                      <h6 className="font-bold">
                       <span className="text-gray mr-2">Product Category:</span> {singleProduct.category}
                      </h6>
                      <h6 className="font-bold">
                      <span className="text-gray mr-2">Product Brand:</span>{singleProduct.brand}
                      </h6>
                    </div>
                  </div>
                  <div className="product-color">
                    <div className="color">
                      <span className="font-bold">Color:</span> Black
                    </div>
                  </div>
                  <div className="product-button">
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
