import {
  Calendar,
  User,
  Clock3,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

function BlogDetails() {

  return (

    <div className="space-y-12">

      <Link
        to="/blog"
        className="
        inline-flex
        items-center
        gap-3
        bg-white/15
        border border-white/20
        backdrop-blur-2xl
        px-8
        py-4
        rounded-full
        shadow-xl
      "
      >

        <ArrowLeft />

        Back To Blogs

      </Link>

      <img
        src="https://picsum.photos/1400/600"
        className="
        h-[500px]
        w-full
        object-cover
        rounded-[50px]
        shadow-xl
      "
      />

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-14
      "
      >

        <h1 className="text-6xl font-bold">

          Spring Boot Microservices Architecture

        </h1>

        <div className="flex flex-wrap gap-10 mt-10">

          <div className="flex items-center gap-3">

            <User className="text-blue-500" />

            Kartik Ojha

          </div>

          <div className="flex items-center gap-3">

            <Calendar className="text-purple-500" />

            15 June 2026

          </div>

          <div className="flex items-center gap-3">

            <Clock3 className="text-green-500" />

            8 min read

          </div>

        </div>

        <div className="space-y-8 mt-14 text-gray-600 leading-9 text-xl">

          <p>

            Microservices architecture allows applications to
            be divided into multiple independent services.

          </p>

          <p>

            ShopFlow uses Spring Boot microservices with
            Eureka Server, API Gateway, Kafka and Docker.

          </p>

          <p>

            Event driven communication through Kafka improves
            scalability and reliability.

          </p>

          <p>

            Docker makes deployment simple and production
            ready.

          </p>

          <p>

            This architecture closely follows industry
            standards used in enterprise applications.

          </p>

        </div>

      </div>

    </div>

  );

}

export default BlogDetails;