import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ShoppingCart,
  BadgeIndianRupee,
  // Tag,
  Package,
  Star,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import api from "../api/axios";
import CartContext from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const [product, setProduct] =
    useState(null);

  useEffect(() => {

    async function fetchProduct() {

      try {

        const response =
          await api.get(
            `/api/products/${id}`
          );

        setProduct(
          response.data
        );

      }
      catch (error) {

        console.log(error);

      }

    }

    fetchProduct();

  }, [id]);

  if (!product) {

    return (

      <div className="text-center mt-40">

        <h1 className="text-6xl font-bold">

          Loading...

        </h1>

      </div>

    );

  }

  return (

    <div className="space-y-24">

      {/* PRODUCT SECTION */}

      <section
        className="
        rounded-[55px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-8 lg:p-14
      "
      >

        <div className="grid lg:grid-cols-2 gap-16">

          {/* IMAGE */}

          <div>

            <div className="overflow-hidden rounded-[45px]">

              <img
                src={
                  product.imageUrl
                    ? product.imageUrl
                    : "https://picsum.photos/900"
                }
                alt={product.name}
                className="
                w-full
                h-[650px]
                object-cover
                rounded-[45px]
                hover:scale-110
                duration-700
              "
              />

            </div>

          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center">

            <div
              className="
              inline-flex
              w-fit
              px-5
              py-3
              rounded-full
              bg-blue-100
              text-blue-600
              font-semibold
            "
            >

              {product.category}

            </div>

            <h1
              className="
              text-5xl
              lg:text-7xl
              font-bold
              mt-8
            "
            >

              {product.name}

            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 mt-8">

              <Star
                className="
                fill-yellow-400
                text-yellow-400
                "
              />

              <Star
                className="
                fill-yellow-400
                text-yellow-400
                "
              />

              <Star
                className="
                fill-yellow-400
                text-yellow-400
                "
              />

              <Star
                className="
                fill-yellow-400
                text-yellow-400
                "
              />

              <Star
                className="
                fill-yellow-400
                text-yellow-400
                "
              />

              <span className="ml-4 text-gray-500">

                4.9 (542 Reviews)

              </span>

            </div>

            {/* Description */}

            <p
              className="
              mt-10
              text-xl
              text-gray-600
              leading-9
            "
            >

              {

                product.description ||

                "Premium quality product crafted with exceptional materials and designed for modern lifestyle."

              }

            </p>

            {/* Price */}

            <div className="mt-12">

              <div className="flex items-center gap-4">

                <BadgeIndianRupee
                  className="text-green-500"
                />

                <h1
                  className="
                  text-6xl
                  font-bold
                  text-blue-600
                "
                >

                  ₹{product.price}

                </h1>

              </div>

              <p className="text-green-600 mt-3">

                Free Delivery Available

              </p>

            </div>

            {/* Stock */}

            <div className="flex items-center gap-4 mt-10">

              <Package
                className="text-purple-500"
              />

              <h2 className="text-2xl">

                In Stock

              </h2>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-14">

              <button
                onClick={() =>
                  addToCart(product)
                }
                className="
                flex
                items-center
                gap-4
                px-10
                py-5
                rounded-full
                text-xl
                text-white
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                shadow-xl
                hover:scale-105
                duration-300
              "
              >

                <ShoppingCart />

                Add To Cart

              </button>

              <button
                className="
                h-[70px]
                w-[70px]
                rounded-full
                bg-white/40
                shadow-lg
                flex
                items-center
                justify-center
                hover:bg-red-500
                hover:text-white
                duration-300
              "
              >

                <Heart />

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST BADGES */}

      <section>

        <div className="grid lg:grid-cols-3 gap-10">

          <div
            className="
            rounded-[40px]
            bg-white/20
            border border-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
          "
          >

            <ShieldCheck
              size={45}
              className="text-green-500"
            />

            <h1 className="text-3xl font-bold mt-8">

              Secure Payments

            </h1>

            <p className="text-gray-600 mt-5 leading-8">

              Protected checkout with industry standard security.

            </p>

          </div>

          <div
            className="
            rounded-[40px]
            bg-white/20
            border border-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
          "
          >

            <Truck
              size={45}
              className="text-blue-500"
            />

            <h1 className="text-3xl font-bold mt-8">

              Fast Delivery

            </h1>

            <p className="text-gray-600 mt-5 leading-8">

              Express shipping available worldwide.

            </p>

          </div>

          <div
            className="
            rounded-[40px]
            bg-white/20
            border border-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
          "
          >

            <RotateCcw
              size={45}
              className="text-purple-500"
            />

            <h1 className="text-3xl font-bold mt-8">

              Easy Returns

            </h1>

            <p className="text-gray-600 mt-5 leading-8">

              Hassle-free return policy for peace of mind.

            </p>

          </div>

        </div>

      </section>

      {/* SPECIFICATIONS */}

      <section
        className="
        rounded-[50px]
        bg-white/20
        border border-white/20
        backdrop-blur-3xl
        shadow-xl
        p-14
      "
      >

        <h1 className="text-5xl font-bold">

          Specifications

        </h1>

        <div className="mt-12 space-y-8 text-xl">

          <div className="flex justify-between">

            <span className="text-gray-500">

              Category

            </span>

            <span>

              {product.category}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">

              Availability

            </span>

            <span>

              In Stock

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">

              Delivery

            </span>

            <span>

              Free Shipping

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">

              Warranty

            </span>

            <span>

              1 Year

            </span>

          </div>

        </div>

      </section>

    </div>

  );

}

export default ProductDetails;