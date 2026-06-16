import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className="
      rounded-3xl
      border border-white/20
      bg-white/15
      backdrop-blur-xl
      shadow-lg
      p-5
      transition duration-300
      hover:scale-105
    "
    >

      <img
        src={
          product.imageUrl
            ? product.imageUrl
            : "https://picsum.photos/400/400"
        }
        alt={product.name}
        className="
        rounded-2xl
        w-full
        h-60
        object-cover
        cursor-pointer
      "
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <h2
        className="mt-4 text-2xl font-semibold cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.name}
      </h2>

      <p className="mt-3 text-gray-600">
        {product.description}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-blue-600">
        ₹{product.price}
      </h2>

      <button
        onClick={() => addToCart(product)}
        className="
        mt-5
        w-full
        bg-blue-500
        text-white
        px-5
        py-3
        rounded-full
        hover:scale-105
        duration-300
      "
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;