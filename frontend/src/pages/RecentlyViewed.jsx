import {
  Eye,
  Star,
  ShoppingCart,
  IndianRupee,
} from "lucide-react";

function RecentlyViewed() {

  const products = [

    {
      id: 1,
      name: "iPhone 17 Pro",
      price: 149999,
      rating: 5,
      image: "https://picsum.photos/500?1",
    },

    {
      id: 2,
      name: "MacBook M5",
      price: 239999,
      rating: 5,
      image: "https://picsum.photos/500?2",
    },

    {
      id: 3,
      name: "Apple Watch Ultra",
      price: 89999,
      rating: 4,
      image: "https://picsum.photos/500?3",
    },

    {
      id: 4,
      name: "AirPods Pro",
      price: 29999,
      rating: 5,
      image: "https://picsum.photos/500?4",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Recently Viewed

        </h1>

        <p
          className="
          mt-5
          text-xl
          text-gray-500
        "
        >

          Continue where you left off.

        </p>

      </div>

      {/* PRODUCTS */}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">

        {

          products.map(

            (product) => (

              <div
                key={product.id}
                className="
                rounded-[45px]
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
                  src={product.image}
                  className="
                  h-72
                  w-full
                  object-cover
                "
                />

                <div className="p-7">

                  <h1 className="text-3xl font-bold">

                    {product.name}

                  </h1>

                  <div className="flex gap-2 mt-5">

                    {

                      Array.from({

                        length: product.rating,

                      }).map(

                        (_, index) => (

                          <Star
                            key={index}
                            className="
                            text-yellow-500
                            fill-yellow-500
                            "
                          />

                        )

                      )

                    }

                  </div>

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    mt-6
                  "
                  >

                    <IndianRupee
                      className="text-green-500"
                    />

                    <h2
                      className="
                      text-3xl
                      font-bold
                      text-blue-500
                    "
                    >

                      {product.price}

                    </h2>

                  </div>

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

                      Add

                    </button>

                    <button
                      className="
                      flex-1
                      bg-white
                      py-4
                      rounded-full
                      flex
                      justify-center
                      items-center
                      gap-2
                    "
                    >

                      <Eye size={18} />

                      View

                    </button>

                  </div>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default RecentlyViewed;