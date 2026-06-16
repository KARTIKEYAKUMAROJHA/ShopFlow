import { useState } from "react";
import api from "../api/axios";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/api/products",
        product
      );

      alert("Product Added Successfully");

      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed To Add Product");

    }

  };

  return (
    <div className="max-w-3xl">

      <h1 className="text-5xl font-bold mb-10">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
        rounded-3xl
        border border-white/20
        bg-white/15
        backdrop-blur-xl
        shadow-lg
        p-8
        space-y-5
      "
      >

        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-4 rounded-2xl bg-white"
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-4 rounded-2xl bg-white"
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-4 rounded-2xl bg-white"
        />

        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-4 rounded-2xl bg-white"
        />

        <input
          type="text"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-4 rounded-2xl bg-white"
        />

        <button
          className="
          w-full
          bg-blue-500
          text-white
          p-4
          rounded-full
          hover:scale-105
          duration-300
        "
        >
          Add Product
        </button>

      </form>

    </div>
  );

}

export default AddProduct;