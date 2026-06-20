import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Search,
} from "lucide-react";

function Wishlist() {

  const [search, setSearch] = useState("");

  const wishlistItems = [

    {
      id: 1,
      name: "iPhone 17 Pro",
      category: "Electronics",
      price: 149999,
      image: "https://picsum.photos/500?1",
    },

    {
      id: 2,
      name: "MacBook M5",
      category: "Electronics",
      price: 239999,
      image: "https://picsum.photos/500?2",
    },

    {
      id: 3,
      name: "Nike Air Max",
      category: "Shoes",
      price: 12999,
      image: "https://picsum.photos/500?3",
    },

  ];

  const filteredItems = wishlistItems.filter(

    (item) =>

      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

  );

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-6xl font-bold">

            Wishlist

          </h1>

          <p className="mt-5 text-xl text-gray-500">

            Your favorite products.

          </p>

        </div>

        <div
          className="
          rounded-full
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          px-8
          py-4
        "
        >

          Items : {filteredItems.length}

        </div>

      </div>

      {/* SEARCH */}

      <div
        className="
        rounded-[40px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-6
      "
      >

        <div className="flex items-center gap-4">

          <Search className="text-blue-500" />

          <input
            type="text"
            placeholder="Search Wishlist..."
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
            text-xl
          "
          />

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">

        {

          filteredItems.map(

            (item) => (

              <div
                key={item.id}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                overflow-hidden
                hover:scale-[1.02]
                duration-300
              "
              >

                <img
                  src={item.image}
                  className="
                  h-72
                  w-full
                  object-cover
                "
                />

                <div className="p-6">

                  <h1 className="text-3xl font-bold">

                    {item.name}

                  </h1>

                  <h2 className="text-gray-500 mt-4">

                    {item.category}

                  </h2>

                  <h2
                    className="
                    mt-5
                    text-3xl
                    font-bold
                    text-blue-500
                  "
                  >

                    ₹{item.price}

                  </h2>

                  <div className="flex gap-4 mt-8">

                    <button
                      className="
                      flex-1
                      bg-blue-500
                      text-white
                      py-4
                      rounded-full
                      flex
                      justify-center
                      items-center
                      gap-2
                    "
                    >

                      <ShoppingCart size={18} />

                      Cart

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

                      Remove

                    </button>

                  </div>

                </div>

              </div>

            )

          )

        }

      </div>

      {

        filteredItems.length === 0 && (

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

            <Heart
              size={90}
              className="
              mx-auto
              text-pink-500
            "
            />

            <h1
              className="
              text-5xl
              font-bold
              mt-10
            "
            >

              Wishlist Is Empty

            </h1>

          </div>

        )

      }

    </div>

  );

}

export default Wishlist;