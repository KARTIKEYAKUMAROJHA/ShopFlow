import { useState } from "react";
import {
  Search,
  Package,
  Star,
  IndianRupee,
} from "lucide-react";

function SearchPage() {

  const [search, setSearch] = useState("");

  const products = [

    {
      id: 1,
      name: "iPhone 17 Pro",
      category: "Electronics",
      price: 149999,
      rating: 5,
      image: "https://picsum.photos/500?1",
    },

    {
      id: 2,
      name: "MacBook M5",
      category: "Electronics",
      price: 239999,
      rating: 5,
      image: "https://picsum.photos/500?2",
    },

    {
      id: 3,
      name: "Nike Air Max",
      category: "Shoes",
      price: 12999,
      rating: 4,
      image: "https://picsum.photos/500?3",
    },

    {
      id: 4,
      name: "Rolex Watch",
      category: "Accessories",
      price: 89999,
      rating: 5,
      image: "https://picsum.photos/500?4",
    },

  ];

  const filteredProducts = products.filter(

    (product) =>

      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

  );

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Search Products

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Find premium products instantly.

        </p>

      </div>

      {/* SEARCH BOX */}

      <div
        className="
        rounded-[40px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-8
      "
      >

        <div className="flex items-center gap-5">

          <Search
            className="text-blue-500"
            size={28}
          />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
            w-full
            bg-transparent
            outline-none
            text-2xl
          "
          />

        </div>

      </div>

      {/* RESULTS */}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">

        {

          filteredProducts.map(

            (product) => (

              <div
                key={product.id}
                className="
                overflow-hidden
                rounded-[40px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                hover:scale-[1.02]
                duration-300
              "
              >

                <img
                  src={product.image}
                  className="
                  h-64
                  w-full
                  object-cover
                "
                />

                <div className="p-7">

                  <div className="flex gap-3 items-center">

                    <Package
                      className="text-blue-500"
                    />

                    <h1 className="text-2xl font-bold">

                      {product.name}

                    </h1>

                  </div>

                  <h2 className="mt-5 text-gray-500">

                    {product.category}

                  </h2>

                  <div className="flex items-center gap-3 mt-5">

                    <IndianRupee
                      className="text-green-500"
                    />

                    <h2 className="text-3xl font-bold text-blue-500">

                      {product.price}

                    </h2>

                  </div>

                  <div className="flex gap-2 mt-5">

                    {

                      Array.from({

                        length: product.rating,

                      }).map((_, index) => (

                        <Star
                          key={index}
                          className="
                          text-yellow-500
                          fill-yellow-500
                          "
                        />

                      ))

                    }

                  </div>

                  <button
                    className="
                    mt-8
                    w-full
                    py-4
                    rounded-full
                    text-white
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    hover:scale-105
                    duration-300
                  "
                  >

                    View Product

                  </button>

                </div>

              </div>

            )

          )

        }

      </div>

      {

        filteredProducts.length === 0 && (

          <div
            className="
            rounded-[50px]
            border border-white/20
            bg-white/15
            backdrop-blur-2xl
            shadow-xl
            p-20
            text-center
          "
          >

            <Search
              size={80}
              className="
              mx-auto
              text-blue-500
            "
            />

            <h1 className="text-5xl font-bold mt-10">

              No Products Found

            </h1>

          </div>

        )

      }

    </div>

  );

}

export default SearchPage;