import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Error submitting the form");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="add container my-5">
      <form className="d-flex flex-column gap-3" onSubmit={onSubmitHandler}>
        <div className="add-img-upload d-flex flex-column align-items-start">
          <p>Upload Image</p>
          <label htmlFor="image" className="d-block">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
              className="img-thumbnail"
              height="100"
            />
          </label>
          <input
            onChange={onImageChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name d-flex flex-column">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            className="form-control"
            placeholder="Type here"
          />
        </div>

        <div className="add-product-description d-flex flex-column">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            className="form-control"
            placeholder="Write Content Here"
          ></textarea>
        </div>

        <div className="add-category-price d-flex gap-3">
          <div className="add-category d-flex flex-column">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
              className="form-select"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price d-flex flex-column">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              className="form-control"
              placeholder="₹20"
              min={0}
            />
          </div>
        </div>

        <button type="submit" className="add-btn btn btn-dark btn-sm">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
