import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import CartContext from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    async function fetchProduct() {

      try {

        const response = await api.get(`/api/products/${id}`);

        console.log(response.data);

        setProduct(response.data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchProduct();

  }, [id]);

  if (!product) {

    return (
      <h1 className="text-3xl text-center mt-20">
        Loading...
      </h1>
    );

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div
        className="
        grid
        md:grid-cols-2
        gap-10
        rounded-3xl
        border border-white/20
        bg-white/15
        backdrop-blur-xl
        shadow-lg
        p-10
      "
      >

        <div>

          <img
            src={
              product.imageUrl
                ? product.imageUrl
                : "https://picsum.photos/600/600"
            }
            alt={product.name}
            className="
            rounded-3xl
            w-full
            h-[500px]
            object-cover
          "
          />

        </div>

        <div>

          <h1 className="text-5xl font-bold">

            {product.name}

          </h1>

          <p className="mt-8 text-xl text-gray-600">

            {product.description}

          </p>

          <h2 className="mt-8 text-2xl">

            Category : {product.category}

          </h2>

          <h2 className="mt-8 text-4xl font-bold text-blue-600">

            ₹{product.price}

          </h2>

          <button
            onClick={() => addToCart(product)}
            className="
            mt-10
            bg-blue-500
            text-white
            px-10
            py-4
            rounded-full
            text-xl
            hover:scale-105
            duration-300
          "
          >

            Add To Cart

          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;