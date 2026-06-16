import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const response = await api.get("/api/products");

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchProducts();

  }, []);

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Manage Products
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="
            rounded-3xl
            border border-white/20
            bg-white/15
            backdrop-blur-xl
            shadow-lg
            p-5
            hover:scale-105
            duration-300
          "
          >

            <img
              src={product.imageUrl}
              alt={product.name}
              className="
              w-full
              h-64
              object-cover
              rounded-3xl
            "
            />

            <h1 className="text-3xl font-bold mt-5">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-3">
              {product.description}
            </p>

            <h2
              className="
              text-3xl
              font-bold
              text-blue-500
              mt-5
            "
            >
              ₹{product.price}
            </h2>

            <div className="flex gap-4 mt-6">

              <button
                className="
                flex-1
                bg-green-500
                text-white
                py-3
                rounded-full
              "
              >
                Edit
              </button>

              <button
                className="
                flex-1
                bg-red-500
                text-white
                py-3
                rounded-full
              "
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ManageProducts;