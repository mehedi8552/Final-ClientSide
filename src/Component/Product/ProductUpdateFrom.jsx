import React, { useEffect } from "react";

import ProductStore from "../../../store/ProductStore";
import Submitbtn from "../../Component/Submitbtn";
import { useParams } from "react-router-dom";
const ProductUpdateFrom = () => {
  const {
    Createproduct,
    setCreateproduct,
    CreateRequest,
    ProductRequest,
    ReadRequest
  } = ProductStore();

  //let { id } = useParams();
  let productID = useParams();
  useEffect(() => {
    (async () => {
      await ReadRequest(productID);
    })();
  }, []);
  // const SubmitLoing = async () => {
  //   await CreateRequest(Createproduct);
  // };
  // const DeleteProduct = async ()=>{
  //   await DeleteProduct(productID)
  // }
  // let productID = useParams();
  // const { Updateproduct, setUpdateproduct, UpdateRequest } = ProductStore();

  const SubmitLoing = async () => {
    await UpdateRequest(productID, Updateproduct);
  };
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Create Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={Createproduct.name}
            onChange={(e) => setCreateproduct("name", e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Brand:
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            value={Createproduct.brand}
            onChange={(e) => setCreateproduct("brand", e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={Createproduct.category}
            onChange={(e) => setCreateproduct("category", e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            value={Createproduct.description}
            onChange={(e) => setCreateproduct("description", e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL:
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            value={Createproduct.image}
            onChange={(e) => setCreateproduct("image", e.target.value)}
            required
          />
        </div>
        <Submitbtn onClick={SubmitLoing} text="next" />
      </form>
    </div>
  );
};

export default ProductUpdateFrom;
