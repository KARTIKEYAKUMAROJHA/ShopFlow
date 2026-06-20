import {
  Star,
  CheckCircle,
  XCircle,
} from "lucide-react";

function CompareProducts() {

  const products = [

    {
      id: 1,
      name: "iPhone 17 Pro",
      image: "https://picsum.photos/500?1",
      price: "₹149999",
      rating: 5,
      storage: "512 GB",
      battery: "4500 mAh",
      camera: "200 MP",
      available: true,
    },

    {
      id: 2,
      name: "Samsung S26 Ultra",
      image: "https://picsum.photos/500?2",
      price: "₹139999",
      rating: 4,
      storage: "512 GB",
      battery: "5000 mAh",
      camera: "200 MP",
      available: true,
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Compare Products

        </h1>

        <p
          className="
          mt-5
          text-xl
          text-gray-500
        "
        >

          Compare specifications and features.

        </p>

      </div>

      {/* CARDS */}

      <div className="grid lg:grid-cols-2 gap-10">

        {

          products.map(

            (product) => (

              <div
                key={product.id}
                className="
                rounded-[50px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                overflow-hidden
              "
              >

                <img
                  src={product.image}
                  className="
                  h-80
                  w-full
                  object-cover
                "
                />

                <div className="p-10">

                  <h1 className="text-4xl font-bold">

                    {product.name}

                  </h1>

                  <h2
                    className="
                    text-blue-500
                    text-3xl
                    font-bold
                    mt-5
                  "
                  >

                    {product.price}

                  </h2>

                  <div className="flex gap-2 mt-6">

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

                  <div className="space-y-7 mt-10">

                    <div className="flex justify-between">

                      <h2>Storage</h2>

                      <h2 className="font-bold">

                        {product.storage}

                      </h2>

                    </div>

                    <div className="flex justify-between">

                      <h2>Battery</h2>

                      <h2 className="font-bold">

                        {product.battery}

                      </h2>

                    </div>

                    <div className="flex justify-between">

                      <h2>Camera</h2>

                      <h2 className="font-bold">

                        {product.camera}

                      </h2>

                    </div>

                    <div className="flex justify-between items-center">

                      <h2>Availability</h2>

                      {

                        product.available ?

                        (

                          <CheckCircle
                            className="text-green-500"
                          />

                        )

                        :

                        (

                          <XCircle
                            className="text-red-500"
                          />

                        )

                      }

                    </div>

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

export default CompareProducts;