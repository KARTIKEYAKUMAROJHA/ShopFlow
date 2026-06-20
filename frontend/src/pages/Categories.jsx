import {
  Smartphone,
  Shirt,
  Watch,
  Headphones,
  Laptop,
  Gamepad2,
  Camera,
  Sofa,
} from "lucide-react";

function Categories() {

  const categories = [

    {
      id: 1,
      name: "Electronics",
      icon: Smartphone,
      image: "https://picsum.photos/500?1",
      products: 120,
    },

    {
      id: 2,
      name: "Fashion",
      icon: Shirt,
      image: "https://picsum.photos/500?2",
      products: 85,
    },

    {
      id: 3,
      name: "Accessories",
      icon: Watch,
      image: "https://picsum.photos/500?3",
      products: 45,
    },

    {
      id: 4,
      name: "Audio",
      icon: Headphones,
      image: "https://picsum.photos/500?4",
      products: 36,
    },

    {
      id: 5,
      name: "Laptops",
      icon: Laptop,
      image: "https://picsum.photos/500?5",
      products: 28,
    },

    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
      image: "https://picsum.photos/500?6",
      products: 52,
    },

    {
      id: 7,
      name: "Cameras",
      icon: Camera,
      image: "https://picsum.photos/500?7",
      products: 19,
    },

    {
      id: 8,
      name: "Furniture",
      icon: Sofa,
      image: "https://picsum.photos/500?8",
      products: 64,
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Categories

        </h1>

        <p className="mt-5 text-gray-500 text-xl">

          Explore products by category.

        </p>

      </div>

      {/* GRID */}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">

        {

          categories.map(

            (category) => {

              const Icon = category.icon;

              return (

                <div
                  key={category.id}
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
                    src={category.image}
                    className="
                    h-56
                    w-full
                    object-cover
                  "
                  />

                  <div className="p-8">

                    <div className="flex items-center gap-4">

                      <Icon
                        size={30}
                        className="text-blue-500"
                      />

                      <h1 className="text-3xl font-bold">

                        {category.name}

                      </h1>

                    </div>

                    <p className="mt-6 text-gray-500">

                      {category.products}

                      {" "}

                      Products Available

                    </p>

                    <button
                      className="
                      mt-8
                      w-full
                      py-4
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400
                      text-white
                      text-lg
                      hover:scale-105
                      duration-300
                    "
                    >

                      Explore

                    </button>

                  </div>

                </div>

              );

            }

          )

        }

      </div>

    </div>

  );

}

export default Categories;