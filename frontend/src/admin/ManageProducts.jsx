import { useEffect, useState } from "react";
import {
  Pencil,
  Trash2,
  Package,
} from "lucide-react";
import api from "../api/axios";

function ManageProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const response = await api.get(
          "/api/products"
        );

        setProducts(
          response.data
        );

      }
      catch (error) {

        console.log(error);

      }

    }

    fetchProducts();

  }, []);

  return (

    <div>

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold">

          Manage Products

        </h1>

        <div
          className="
          rounded-full
          bg-white/15
          border border-white/20
          backdrop-blur-xl
          px-6
          py-3
          shadow-xl
        "
        >

          Total Products : {products.length}

        </div>

      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">

        {

          products.map((product) => (

            <div
              key={product.id}
              className="
              rounded-[40px]
              border border-white/20
              bg-white/15
              backdrop-blur-2xl
              shadow-xl
              p-5
              hover:scale-[1.02]
              duration-300
            "
            >

              <img
                src={
                  product.imageUrl
                    ? product.imageUrl
                    : "https://picsum.photos/500"
                }
                alt={product.name}
                className="
                h-72
                w-full
                object-cover
                rounded-[30px]
              "
              />

              <div className="mt-6">

                <h1 className="text-3xl font-bold">

                  {product.name}

                </h1>

                <p className="text-gray-500 mt-4">

                  {product.description}

                </p>

                <div className="flex justify-between items-center mt-6">

                  <h2 className="text-3xl font-bold text-blue-500">

                    ₹{product.price}

                  </h2>

                  <div
                    className="
                    bg-blue-500/20
                    px-5
                    py-2
                    rounded-full
                  "
                  >

                    {product.category}

                  </div>

                </div>

                <div className="flex gap-4 mt-8">

                  <button
                    className="
                    flex-1
                    bg-green-500
                    text-white
                    py-4
                    rounded-full
                    flex
                    justify-center
                    items-center
                    gap-2
                  "
                  >

                    <Pencil size={18} />

                    Edit

                  </button>

                  <button
                    className="
                    flex-1
                    bg-red-500
                    text-white
                    py-4
                    rounded-full
                    flex
                    justify-center
                    items-center
                    gap-2
                  "
                  >

                    <Trash2 size={18} />

                    Delete

                  </button>

                </div>

              </div>

            </div>

          ))

        }

      </div>

      {

        products.length === 0 && (

          <div
            className="
            mt-20
            rounded-[40px]
            border border-white/20
            bg-white/15
            backdrop-blur-2xl
            shadow-xl
            p-16
            text-center
          "
          >

            <Package
              size={80}
              className="mx-auto text-blue-500"
            />

            <h1 className="text-4xl font-bold mt-8">

              No Products Available

            </h1>

          </div>

        )

      }

    </div>

  );

}

export default ManageProducts;