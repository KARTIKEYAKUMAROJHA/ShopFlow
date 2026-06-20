import {
  Sparkles,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Users,
  ShoppingBag,
  Star,
  HeartHandshake,
} from "lucide-react";

function About() {

  return (

    <div className="space-y-14">

      {/* HERO */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-12
      "
      >

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div
              className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-blue-500/10
              text-blue-500
            "
            >

              <Sparkles />

              About ShopFlow

            </div>

            <h1
              className="
              text-6xl
              font-bold
              mt-8
            "
            >

              Premium E-Commerce
              Experience

            </h1>

            <p
              className="
              mt-8
              text-xl
              text-gray-600
              leading-9
            "
            >

              ShopFlow is a premium full stack e-commerce platform
              built using React, Spring Boot Microservices,
              Kafka, Docker and MySQL. Our goal is to deliver
              a beautiful shopping experience with enterprise
              level architecture and modern UI.

            </p>

          </div>

          <img
            src="https://picsum.photos/900/700"
            className="
            rounded-[40px]
            h-[450px]
            object-cover
            w-full
          "
          />

        </div>

      </div>

      {/* STATS */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
          text-center
        "
        >

          <Users
            size={45}
            className="mx-auto text-blue-500"
          />

          <h1 className="text-5xl font-bold mt-6">

            10K+

          </h1>

          <h2 className="mt-3 text-gray-500">

            Customers

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
          text-center
        "
        >

          <ShoppingBag
            size={45}
            className="mx-auto text-purple-500"
          />

          <h1 className="text-5xl font-bold mt-6">

            500+

          </h1>

          <h2 className="mt-3 text-gray-500">

            Products

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
          text-center
        "
        >

          <Star
            size={45}
            className="mx-auto text-yellow-500"
          />

          <h1 className="text-5xl font-bold mt-6">

            4.9

          </h1>

          <h2 className="mt-3 text-gray-500">

            Ratings

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
          text-center
        "
        >

          <HeartHandshake
            size={45}
            className="mx-auto text-pink-500"
          />

          <h1 className="text-5xl font-bold mt-6">

            99%

          </h1>

          <h2 className="mt-3 text-gray-500">

            Satisfaction

          </h2>

        </div>

      </div>

      {/* FEATURES */}

      <div className="grid lg:grid-cols-3 gap-10">

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
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

            Secure Platform

          </h1>

          <p className="mt-5 text-gray-600 leading-8">

            Enterprise-grade security powered by JWT authentication.

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
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

          <p className="mt-5 text-gray-600 leading-8">

            Reliable shipping and quick order processing.

          </p>

        </div>

        <div
          className="
          rounded-[40px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <BadgeDollarSign
            size={45}
            className="text-purple-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Best Pricing

          </h1>

          <p className="mt-5 text-gray-600 leading-8">

            Premium quality products with affordable prices.

          </p>

        </div>

      </div>

    </div>

  );

}

export default About;