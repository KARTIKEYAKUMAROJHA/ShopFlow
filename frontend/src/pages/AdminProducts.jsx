import { useState } from "react";
import {
  Package,
  BadgeIndianRupee,
  Trash2,
} from "lucide-react";

import {
  getAllProducts,
  deleteProduct,
} from "../services/productService";

function AdminProducts() {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {

    setLoaded(true);

    getAllProducts()

      .then((data) => {

        setProducts(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }

  async function handleDelete(id) {

    try {

      await deleteProduct(id);

      setProducts(

        products.filter(

          (product) =>

            product.id !== id

        )

      );

    }

    catch (error) {

      console.log(error);

    }

  }

  return (

    <div className="space-y-10">

      <div>

        <h1 className="text-6xl font-bold">

          Products

        </h1>

        <p className="text-gray-500 text-xl mt-5">

          Manage all products.

        </p>

      </div>

      <div
        className="
        rounded-[40px]
        bg-white/20
        border
        border-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-10
      "
      >

        <div className="flex items-center gap-4">

          <Package className="text-blue-500" />

          <h2 className="text-3xl font-bold">

            Total Products : {products.length}

          </h2>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {

          products.map((product) => (

            <div

              key={product.id}

              className="
              rounded-[40px]
              bg-white/20
              border
              border-white/20
              backdrop-blur-3xl
              shadow-2xl
              p-8
            "
            >

              <img

                src={product.imageUrl}

                alt={product.name}

                className="
                w-full
                h-64
                object-cover
                rounded-[30px]
              "

              />

              <h2 className="text-3xl font-bold mt-6">

                {product.name}

              </h2>

              <p className="text-gray-500 mt-4">

                {product.category}

              </p>

              <div
                className="
                mt-6
                flex
                items-center
                gap-2
                text-2xl
                font-bold
              "
              >

                <BadgeIndianRupee />

                {product.price}

              </div>

              <button

                onClick={() =>

                  handleDelete(product.id)

                }

                className="
                mt-8
                w-full
                rounded-full
                py-4
                bg-red-500
                text-white
                flex
                justify-center
                items-center
                gap-3
              "
              >

                <Trash2 />

                Delete

              </button>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default AdminProducts;