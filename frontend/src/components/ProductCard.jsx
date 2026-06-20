import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";

import CartContext from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  const navigate =
    useNavigate();

  return (

    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[38px]
      border border-white/20
      bg-white/20
      backdrop-blur-3xl
      shadow-[0_20px_60px_rgba(255,255,255,0.18)]
      p-5
      hover:-translate-y-2
      hover:shadow-[0_30px_70px_rgba(59,130,246,0.25)]
      duration-500
    "
    >

      {/* Wishlist */}

      <button
        className="
        absolute
        top-5
        right-5
        z-20
        h-12
        w-12
        rounded-full
        bg-white/60
        backdrop-blur-2xl
        flex
        items-center
        justify-center
        shadow-lg
        hover:bg-red-500
        hover:text-white
        duration-300
      "
      >

        <Heart size={18} />

      </button>

      {/* Image */}

      <div
        className="
        overflow-hidden
        rounded-[32px]
        cursor-pointer
      "
        onClick={() =>
          navigate(
            `/product/${product.id}`
          )
        }
      >

        <img
          src={
            product.imageUrl
              ? product.imageUrl
              : "https://picsum.photos/700/700"
          }
          alt={product.name}
          className="
          w-full
          h-72
          object-cover
          rounded-[32px]
          group-hover:scale-110
          duration-700
        "
        />

      </div>

      {/* Category */}

      <div className="mt-6">

        <span
          className="
          px-4
          py-2
          rounded-full
          text-sm
          font-medium
          bg-blue-100
          text-blue-600
        "
        >

          {product.category}

        </span>

      </div>

      {/* Product Name */}

      <h1
        className="
        mt-5
        text-2xl
        font-bold
        cursor-pointer
        line-clamp-1
      "
        onClick={() =>
          navigate(
            `/product/${product.id}`
          )
        }
      >

        {product.name}

      </h1>

      {/* Description */}

      <p
        className="
        mt-4
        text-gray-600
        leading-7
        line-clamp-2
      "
      >

        {

          product.description ||

          "Premium quality product crafted for modern lifestyle."

        }

      </p>

      {/* Rating */}

      <div className="flex items-center gap-1 mt-5">

        <Star
          size={16}
          className="
          fill-yellow-400
          text-yellow-400
        "
        />

        <Star
          size={16}
          className="
          fill-yellow-400
          text-yellow-400
        "
        />

        <Star
          size={16}
          className="
          fill-yellow-400
          text-yellow-400
        "
        />

        <Star
          size={16}
          className="
          fill-yellow-400
          text-yellow-400
        "
        />

        <Star
          size={16}
          className="
          fill-yellow-400
          text-yellow-400
        "
        />

        <span className="ml-3 text-gray-500">

          (4.9)

        </span>

      </div>

      {/* Price */}

      <div className="mt-6 flex items-center justify-between">

        <div>

          <h1
            className="
            text-3xl
            font-bold
            text-blue-600
          "
          >

            ₹{product.price}

          </h1>

          <p
            className="
            text-sm
            text-green-600
            mt-1
          "
          >

            Free Delivery

          </p>

        </div>

        <button
          onClick={() =>
            navigate(
              `/product/${product.id}`
            )
          }
          className="
          h-12
          w-12
          rounded-full
          bg-white/50
          backdrop-blur-2xl
          flex
          items-center
          justify-center
          shadow-lg
          hover:bg-blue-500
          hover:text-white
          duration-300
        "
        >

          <Eye size={20} />

        </button>

      </div>

      {/* Add To Cart */}

      <button
        onClick={() =>
          addToCart(product)
        }
        className="
        mt-7
        w-full
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        py-4
        text-lg
        font-semibold
        shadow-xl
        flex
        items-center
        justify-center
        gap-3
        hover:scale-[1.03]
        duration-300
      "
      >

        <ShoppingCart size={20} />

        Add To Cart

      </button>

    </div>

  );

}

export default ProductCard;