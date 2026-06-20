import { useEffect, useState } from "react";
import {
  Search,
  Grid3X3,
  SlidersHorizontal,
  Star,
} from "lucide-react";

import api from "../api/axios";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {

    async function fetchProducts() {

      try {

        const response =
          await api.get("/api/products");

        setProducts(response.data);

      }
      catch (error) {

        console.log(error);

      }

    }

    fetchProducts();

  }, []);

  const categories = [

    "All",
    ...new Set(
      products.map(
        product => product.category
      )
    )

  ];

  const filteredProducts =
    products.filter(

      product => {

        const matchesSearch =
          product.name
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          selectedCategory === "All" ||
          product.category === selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );

      }

    );

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-5xl md:text-7xl font-bold">

            Products

          </h1>

          <p className="text-gray-500 text-xl mt-5">

            Explore premium collections curated for you.

          </p>

        </div>

        <div
          className="
          rounded-full
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-xl
          px-8
          py-5
          text-xl
        "
        >

          Total Products : {products.length}

        </div>

      </div>

      {/* SEARCH */}

      <div
        className="
        rounded-[40px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-xl
        p-8
      "
      >

        <div className="flex items-center gap-5">

          <Search
            className="text-blue-500"
            size={24}
          />

          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
            bg-transparent
            outline-none
            w-full
            text-xl
          "
          />

        </div>

      </div>

      {/* CATEGORY FILTER */}

      <section>

        <div className="flex items-center gap-4 mb-8">

          <SlidersHorizontal
            className="text-blue-500"
          />

          <h2 className="text-3xl font-bold">

            Categories

          </h2>

        </div>

        <div className="flex flex-wrap gap-5">

          {

            categories.map(

              category => (

                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category
                    )
                  }
                  className={`

                  px-7 py-4
                  rounded-full
                  duration-300
                  border

                  ${
                    selectedCategory === category

                      ?

                      "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-xl"

                      :

                      "bg-white/20 border-white/20 backdrop-blur-2xl"

                  }

                  `}
                >

                  {category}

                </button>

              )

            )

          }

        </div>

      </section>

      {/* PRODUCT TITLE */}

      <div className="flex items-center gap-4">

        <Grid3X3
          className="text-blue-500"
        />

        <h1 className="text-4xl font-bold">

          Product Catalog

        </h1>

      </div>

      {/* PRODUCTS */}

      {

        filteredProducts.length > 0

          ?

          (

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">

              {

                filteredProducts.map(

                  product => (

                    <ProductCard
                      key={product.id}
                      product={product}
                    />

                  )

                )

              }

            </div>

          )

          :

          (

            <div
              className="
              rounded-[50px]
              border border-white/20
              bg-white/20
              backdrop-blur-3xl
              shadow-xl
              p-24
              text-center
            "
            >

              <Star
                size={60}
                className="
                mx-auto
                text-yellow-500
              "
              />

              <h1 className="text-5xl font-bold mt-8">

                No Products Found

              </h1>

              <p className="text-gray-500 text-xl mt-5">

                Try another category or search keyword.

              </p>

            </div>

          )

      }

    </div>

  );

}

export default Products;