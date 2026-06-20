import {
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Star,
  Sparkles,
  HeartHandshake,
  ShoppingBag,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-32">

      {/* HERO */}

      <section
        className="
        overflow-hidden
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-8 md:p-14
      "
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div
              className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-blue-100/50
              text-blue-600
              mb-8
            "
            >
              <Sparkles size={18} />
              Premium Shopping Experience
            </div>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
            >
              Luxury Shopping
              <br />
              Reimagined
            </h1>

            <p
              className="
              mt-8
              text-xl
              text-gray-600
              leading-9
            "
            >
              ShopFlow delivers an Apple-inspired experience powered by React,
              Spring Boot Microservices, Kafka and Docker.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/products"
                className="
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                text-white
                px-10
                py-5
                rounded-full
                text-lg
                shadow-xl
                hover:scale-105
                duration-300
              "
              >
                Explore Products
              </Link>

              <Link
                to="/register"
                className="
                bg-white/70
                px-10
                py-5
                rounded-full
                shadow-lg
                hover:scale-105
                duration-300
              "
              >
                Get Started
              </Link>

            </div>

          </div>

          <div>

            <img
              src="https://picsum.photos/900/900"
              alt="hero"
              className="
              h-[500px]
              w-full
              object-cover
              rounded-[45px]
              shadow-2xl
              hover:scale-[1.02]
              duration-500
            "
            />

          </div>

        </div>

      </section>

      {/* FEATURED CATEGORIES */}

      <section>

        <div
          className="
          rounded-[50px]
          border border-white/20
          bg-white/20
          backdrop-blur-3xl
          shadow-xl
          p-10 md:p-14
          "
        >

          <div className="text-center">

            <h1 className="text-5xl font-bold">

              Featured Categories

            </h1>

            <p className="text-gray-600 text-xl mt-5">

              Shop from our most popular collections

            </p>

          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8 mt-14">

            {[
              ["Electronics", 1],
              ["Fashion", 2],
              ["Shoes", 3],
              ["Accessories", 4],
              ["Beauty", 5],
              ["Furniture", 6],
            ].map(([name, id]) => (

              <Link
                key={id}
                to={`/products/category/${name}`}
                className="
                rounded-[35px]
                border border-white/20
                bg-white/30
                backdrop-blur-2xl
                shadow-lg
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-2xl
                duration-300
                "
              >

                <img
                  src={`https://picsum.photos/200?${id}`}
                  className="
                  h-24
                  w-24
                  rounded-full
                  mx-auto
                  object-cover
                  shadow-lg
                  "
                />

                <h2 className="font-bold text-xl mt-6">

                  {name}

                </h2>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE SHOPFLOW */}

      <section>

        <h1 className="text-5xl font-bold mb-14">
          Why Choose ShopFlow
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="rounded-[40px] border border-white/20 bg-white/20 backdrop-blur-2xl p-10 shadow-xl hover:-translate-y-2 duration-300">

            <ShieldCheck
              size={45}
              className="text-green-500"
            />

            <h1 className="text-3xl font-bold mt-8">
              Secure Payments
            </h1>

            <p className="mt-5 text-gray-600 leading-8">
              Enterprise-grade JWT authentication and secure transactions.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/20 bg-white/20 backdrop-blur-2xl p-10 shadow-xl hover:-translate-y-2 duration-300">

            <Truck
              size={45}
              className="text-blue-500"
            />

            <h1 className="text-3xl font-bold mt-8">
              Fast Delivery
            </h1>

            <p className="mt-5 text-gray-600 leading-8">
              Lightning fast order processing and worldwide shipping.
            </p>

          </div>

          <div className="rounded-[40px] border border-white/20 bg-white/20 backdrop-blur-2xl p-10 shadow-xl hover:-translate-y-2 duration-300">

            <BadgeDollarSign
              size={45}
              className="text-purple-500"
            />

            <h1 className="text-3xl font-bold mt-8">
              Best Pricing
            </h1>

            <p className="mt-5 text-gray-600 leading-8">
              Premium quality with affordable prices.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}

      <section>

        <div className="flex items-center justify-between mb-14">

          <h1 className="text-5xl font-bold">

            Featured Products

          </h1>

          <Link
            to="/products"
            className="text-blue-500 text-xl font-semibold"
          >
            View All →
          </Link>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="
              rounded-[40px]
              bg-white/20
              border border-white/20
              backdrop-blur-2xl
              shadow-xl
              overflow-hidden
              hover:-translate-y-2
              duration-300
              "
            >

              <img
                src={`https://picsum.photos/500?${item}`}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h2 className="text-2xl font-bold">

                  Premium Product {item}

                </h2>

                <p className="text-gray-500 mt-3">

                  Electronics

                </p>

                <div className="flex justify-between items-center mt-8">

                  <h1 className="text-3xl font-bold text-blue-500">

                    ₹{item * 4999}

                  </h1>

                  <button
                    className="
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    text-white
                    px-6
                    py-3
                    rounded-full
                    "
                  >
                    Buy
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* STATS */}

      <section
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        p-14
        shadow-xl
      "
      >

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h1 className="text-6xl font-bold text-blue-500">
              10K+
            </h1>
            <p className="mt-4 text-gray-600">
              Customers
            </p>
          </div>

          <div>
            <h1 className="text-6xl font-bold text-cyan-500">
              500+
            </h1>
            <p className="mt-4 text-gray-600">
              Products
            </p>
          </div>

          <div>
            <h1 className="text-6xl font-bold text-green-500">
              99%
            </h1>
            <p className="mt-4 text-gray-600">
              Satisfaction
            </p>
          </div>

          <div>
            <h1 className="text-6xl font-bold text-purple-500">
              24/7
            </h1>
            <p className="mt-4 text-gray-600">
              Support
            </p>
          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section>

        <h1 className="text-5xl font-bold mb-14">

          Customer Reviews

        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="
              rounded-[40px]
              bg-white/20
              border border-white/20
              backdrop-blur-2xl
              shadow-xl
              p-10
              "
            >

              <div className="flex gap-2 text-yellow-500">

                <Star />
                <Star />
                <Star />
                <Star />
                <Star />

              </div>

              <p className="mt-8 text-gray-600 leading-8">

                Amazing experience. The design and performance are outstanding.

              </p>

              <h2 className="font-bold text-2xl mt-8">

                Customer {item}

              </h2>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICES */}

      <section>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="rounded-[40px] bg-white/20 p-10 shadow-xl border border-white/20">
            <HeartHandshake className="text-pink-500" size={45} />
            <h1 className="text-3xl font-bold mt-8">
              Customer First
            </h1>
            <p className="mt-5 text-gray-600 leading-8">
              We focus on premium customer experience.
            </p>
          </div>

          <div className="rounded-[40px] bg-white/20 p-10 shadow-xl border border-white/20">
            <ShoppingBag className="text-blue-500" size={45} />
            <h1 className="text-3xl font-bold mt-8">
              Premium Products
            </h1>
            <p className="mt-5 text-gray-600 leading-8">
              Curated collection of top quality products.
            </p>
          </div>

          <div className="rounded-[40px] bg-white/20 p-10 shadow-xl border border-white/20">
            <Sparkles className="text-yellow-500" size={45} />
            <h1 className="text-3xl font-bold mt-8">
              Luxury Experience
            </h1>
            <p className="mt-5 text-gray-600 leading-8">
              Inspired by iOS 27 water design.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section
        className="
        rounded-[55px]
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        text-center
        p-16
        shadow-2xl
      "
      >

        <h1 className="text-5xl md:text-7xl font-bold">

          Start Shopping Today

        </h1>

        <p className="text-xl mt-8">

          Thousands of premium products are waiting for you.

        </p>

        <Link
          to="/products"
          className="
          inline-flex
          items-center
          gap-3
          mt-10
          bg-white
          text-blue-500
          px-10
          py-5
          rounded-full
          text-xl
          shadow-xl
          hover:scale-105
          duration-300
        "
        >
          Explore Now
          <ArrowRight />
        </Link>

      </section>

    </div>
  );
}

export default Home;