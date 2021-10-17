import React from "react";

export const CartItems = () => {
  return (
    <div className=" row ">
      <div className="col-md-4 text-center py-1 container">
        <div className="item mt-2 container text-center">
          <div className="item-title text-center container">
            <h3>title</h3>
            <img
              className="text-center container"
              src=""
              alt=""
              width="60px"
              height="80px"
            />
            <span className="badge badge-pill bg-danger ml-2">priority</span>
          </div>

          <div className="item-body">
            <p>description</p>
            <p>
              <mark>responsible</mark>
            </p>
          </div>
          <div className="item-footer text-center">
            <button className="btn btn-warning">Edit</button>

            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
