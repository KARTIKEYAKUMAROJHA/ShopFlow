import { Link } from "react-router-dom";
import {
  TriangleAlert,
  ArrowLeft,
} from "lucide-react";

function NotFound() {

  return (

    <div
      className="
      min-h-[80vh]
      flex
      justify-center
      items-center
    "
    >

      <div
        className="
        max-w-3xl
        w-full
        rounded-[50px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-20
        text-center
      "
      >

        <TriangleAlert
          size={100}
          className="
          mx-auto
          text-red-500
        "
        />

        <h1
          className="
          text-8xl
          font-bold
          mt-10
        "
        >

          404

        </h1>

        <h2
          className="
          text-4xl
          font-bold
          mt-6
        "
        >

          Page Not Found

        </h2>

        <p
          className="
          mt-8
          text-xl
          text-gray-500
        "
        >

          The page you are looking for does not exist.

        </p>

        <Link to="/">

          <button
            className="
            mt-12
            bg-blue-500
            text-white
            px-10
            py-5
            rounded-full
            text-xl
            flex
            items-center
            gap-3
            mx-auto
            hover:scale-105
            duration-300
          "
          >

            <ArrowLeft />

            Back To Home

          </button>

        </Link>

      </div>

    </div>

  );

}

export default NotFound;