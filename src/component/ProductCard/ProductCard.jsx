import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // console.log(props.match, props.location);
  return (
    <>
      {/* <div className="row m-0"> */}
      {props.data.map((e, index) => {
        return (
          <Link className="mx-3" to={`${props.match.url}/${e.id}`} style={{ width: "30%", height: "50%" }}>
            <div key={index} className="card border-0 mt-5">
              <img src={e.image} className="card-img-top" alt="..." style={{ height: "16rem" }} />
              <div className="card-body">
                <p className="card-text" style={{ font: "monospace", fontWeight: "300", fontSize: "13px" }}>
                  ${e.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
      {/* </div> */}
    </>
  );
};
export default ProductCard;
