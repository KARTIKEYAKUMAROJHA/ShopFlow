import {
  User,
  Mail,
  Shield,
  Phone,
  MapPin,
  Calendar,
  ShoppingBag,
  Crown,
  Wallet,
  Heart,
  Settings,
  Edit3,
  BadgeCheck,
} from "lucide-react";

function Profile() {

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-5xl lg:text-7xl font-bold">

          My Profile

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Manage your account and premium membership.

        </p>

      </div>

      {/* PROFILE CARD */}

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

        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* IMAGE */}

          <div className="flex justify-center">

            <div className="relative">

              <img
                src="https://i.pravatar.cc/500?img=1"
                alt=""
                className="
                w-72
                h-72
                rounded-full
                object-cover
                border-[10px]
                border-white
                shadow-2xl
              "
              />

              <div
                className="
                absolute
                bottom-5
                right-5
                bg-green-500
                h-7
                w-7
                rounded-full
                border-4
                border-white
              "
              />

            </div>

          </div>

          {/* DETAILS */}

          <div className="lg:col-span-2">

            <div className="flex flex-wrap gap-4 items-center">

              <h1 className="text-5xl font-bold">

                Kartik Ojha

              </h1>

              <BadgeCheck
                className="
                text-blue-500
              "
                size={34}
              />

            </div>

            <p
              className="
              mt-5
              text-gray-500
              text-xl
            "
            >

              Full Stack Java Developer

            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

              <div className="flex gap-4 items-center">

                <User className="text-blue-500" />

                <span className="text-xl">

                  Kartik Ojha

                </span>

              </div>

              <div className="flex gap-4 items-center">

                <Mail className="text-purple-500" />

                <span className="text-xl">

                  kartik@gmail.com

                </span>

              </div>

              <div className="flex gap-4 items-center">

                <Phone className="text-green-500" />

                <span className="text-xl">

                  +91 9876543210

                </span>

              </div>

              <div className="flex gap-4 items-center">

                <MapPin className="text-red-500" />

                <span className="text-xl">

                  India

                </span>

              </div>

              <div className="flex gap-4 items-center">

                <Shield className="text-yellow-500" />

                <span className="text-xl">

                  USER

                </span>

              </div>

              <div className="flex gap-4 items-center">

                <Calendar className="text-pink-500" />

                <span className="text-xl">

                  Joined 2026

                </span>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-12">

              <button
                className="
                px-8
                py-4
                rounded-full
                text-white
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                shadow-xl
                flex
                items-center
                gap-3
                hover:scale-105
                duration-300
              "
              >

                <Edit3 size={20} />

                Edit Profile

              </button>

              <button
                className="
                px-8
                py-4
                rounded-full
                bg-white/40
                shadow-lg
                flex
                items-center
                gap-3
                hover:scale-105
                duration-300
              "
              >

                <Settings size={20} />

                Settings

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section>

        <div className="grid lg:grid-cols-4 gap-10">

          <div
            className="
            rounded-[40px]
            border border-white/20
            bg-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
            text-center
          "
          >

            <ShoppingBag
              size={50}
              className="
              mx-auto
              text-blue-500
            "
            />

            <h1 className="text-5xl font-bold mt-8">

              15

            </h1>

            <h2 className="mt-5 text-2xl">

              Orders

            </h2>

          </div>

          <div
            className="
            rounded-[40px]
            border border-white/20
            bg-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
            text-center
          "
          >

            <Wallet
              size={50}
              className="
              mx-auto
              text-green-500
            "
            />

            <h1 className="text-4xl font-bold mt-8">

              ₹542,500

            </h1>

            <h2 className="mt-5 text-2xl">

              Total Spent

            </h2>

          </div>

          <div
            className="
            rounded-[40px]
            border border-white/20
            bg-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
            text-center
          "
          >

            <Heart
              size={50}
              className="
              mx-auto
              text-pink-500
            "
            />

            <h1 className="text-5xl font-bold mt-8">

              28

            </h1>

            <h2 className="mt-5 text-2xl">

              Wishlist

            </h2>

          </div>

          <div
            className="
            rounded-[40px]
            border border-white/20
            bg-white/20
            backdrop-blur-2xl
            shadow-xl
            p-10
            text-center
          "
          >

            <Crown
              size={50}
              className="
              mx-auto
              text-yellow-500
            "
            />

            <h1 className="text-5xl font-bold mt-8">

              Gold

            </h1>

            <h2 className="mt-5 text-2xl">

              Membership

            </h2>

          </div>

        </div>

      </section>

      {/* MEMBERSHIP */}

      <section
        className="
        rounded-[55px]
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-indigo-500
        text-white
        shadow-2xl
        p-14
      "
      >

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <div>

            <h1 className="text-5xl font-bold">

              ShopFlow Gold Member

            </h1>

            <p className="text-xl mt-6">

              Enjoy priority delivery, exclusive discounts and premium support.

            </p>

          </div>

          <button
            className="
            bg-white
            text-blue-500
            px-10
            py-5
            rounded-full
            text-xl
            font-bold
            shadow-xl
            hover:scale-105
            duration-300
          "
          >

            Upgrade Membership

          </button>

        </div>

      </section>

    </div>

  );

}

export default Profile;