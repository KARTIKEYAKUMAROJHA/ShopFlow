import {
  House,
  MapPin,
  Phone,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

function Addresses() {

  const addresses = [

    {
      id: 1,
      name: "Kartik Ojha",
      phone: "+91 9876543210",
      address:
        "New Delhi, India - 110001",
      type: "Home",
    },

    {
      id: 2,
      name: "Kartik Ojha",
      phone: "+91 9876543210",
      address:
        "Bangalore, India - 560001",
      type: "Office",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-6xl font-bold">

            Saved Addresses

          </h1>

          <p
            className="
            mt-5
            text-xl
            text-gray-500
          "
          >

            Manage your delivery locations.

          </p>

        </div>

        <button
          className="
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          text-white
          px-8
          py-4
          rounded-full
          flex
          items-center
          gap-3
          shadow-xl
        "
        >

          <Plus />

          Add Address

        </button>

      </div>

      {/* ADDRESS LIST */}

      <div className="grid lg:grid-cols-2 gap-10">

        {

          addresses.map(

            (item) => (

              <div
                key={item.id}
                className="
                rounded-[45px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                p-10
              "
              >

                <div className="flex justify-between">

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                  "
                  >

                    <House
                      className="text-blue-500"
                    />

                    <h1
                      className="
                      text-3xl
                      font-bold
                    "
                    >

                      {item.type}

                    </h1>

                  </div>

                  <div
                    className="
                    px-5
                    py-2
                    rounded-full
                    bg-blue-100
                    text-blue-600
                  "
                  >

                    Default

                  </div>

                </div>

                <h2
                  className="
                  text-2xl
                  font-bold
                  mt-8
                "
                >

                  {item.name}

                </h2>

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  mt-6
                "
                >

                  <Phone
                    className="text-green-500"
                  />

                  {item.phone}

                </div>

                <div
                  className="
                  flex
                  items-start
                  gap-3
                  mt-6
                "
                >

                  <MapPin
                    className="text-red-500"
                  />

                  {item.address}

                </div>

                <div className="flex gap-5 mt-10">

                  <button
                    className="
                    flex-1
                    bg-green-500
                    text-white
                    py-4
                    rounded-full
                    flex
                    justify-center
                    items-center
                    gap-2
                  "
                  >

                    <Pencil size={18} />

                    Edit

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

                    Delete

                  </button>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default Addresses;