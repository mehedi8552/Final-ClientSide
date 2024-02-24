import React, { useEffect } from "react";
import ProductStore from "../../../store/ProductStore";
import Submitbtn from "../../Component/Submitbtn";
import { Link } from "react-router-dom";
function ProductFrom() {
  const {
    Createproduct,
    setCreateproduct,
    CreateRequest,
    ProductRequest,
    ProductList,
  } = ProductStore();
  useEffect(() => {
    (async () => {
      await ProductRequest();
    })();
  }, [ProductList]);

  //console.log(ProductList);
  // useEffect(async () => {
  //   await ProductRequest();
  // }, [ProductList]);
  //console.log(ProductList);
  
  const SubmitLoing = async () => {
    await CreateRequest(Createproduct);
  };
  const DeleteProduct = async ()=>{
    await DeleteProduct(productID)
  }
  
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
      {ProductList?.map((item, i) => {
        return (
          <>
          
          <Link key={i} to={`/ReadbyProduct/${item._id}`}  className="card m-10 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {item.name}</h2>
              <p className="w-52"> <strong>Description: </strong> {item.description}</p>
              <div className="card-actions">
                <button onClick={DeleteProduct}  className="btn btn-primary">Delete</button>
              </div>
            </div>
          </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductFrom;
