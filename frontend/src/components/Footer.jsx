import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Camera,
  Globe,
  GitBranch,
} from "lucide-react";

function Footer() {

  return (

    <footer
      className="
      mt-24
      rounded-[40px]
      border border-white/20
      bg-white/15
      backdrop-blur-2xl
      shadow-xl
      p-12
    "
    >

      <div className="grid lg:grid-cols-4 gap-10">

        <div>

          <h1 className="text-4xl font-bold text-blue-500">

            ShopFlow

          </h1>

          <p className="mt-6 text-gray-600 leading-8">

            Premium Full Stack E-Commerce Platform built with React,
            Spring Boot Microservices, Kafka and Docker.

          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">

            Company

          </h2>

          <div className="space-y-4 text-gray-600">

            <Link
              to="/about"
              className="block hover:text-blue-500 duration-300"
            >
              About Us
            </Link>

            <Link
              to="/careers"
              className="block hover:text-blue-500 duration-300"
            >
              Careers
            </Link>

            <Link
              to="/blog"
              className="block hover:text-blue-500 duration-300"
            >
              Blog
            </Link>

            <Link
              to="/privacy-policy"
              className="block hover:text-blue-500 duration-300"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">

            Contact

          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <Mail className="text-blue-500" />

              <p>

                ikartikeyojha@gmail.com

              </p>

            </div>

            <div className="flex items-center gap-3">

              <Phone className="text-green-500" />

              <p>

                +91 9876543210

              </p>

            </div>

            <div className="flex items-center gap-3">

              <MapPin className="text-red-500" />

              <p>

                India

              </p>

            </div>

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-6">

            Follow Us

          </h2>

          <div className="space-y-5 text-gray-600">

            <div className="flex items-center gap-3">

              <Camera className="text-pink-500" />

              <p>

                Instagram

              </p>

            </div>

            <div className="flex items-center gap-3">

              <Globe className="text-blue-500" />

              <p>

                LinkedIn

              </p>

            </div>

            <div className="flex items-center gap-3">

              <GitBranch />

              <p>

                GitHub

              </p>

            </div>

          </div>

        </div>

      </div>

      <div
        className="
        border-t
        border-white/20
        mt-10
        pt-8
        text-center
        text-gray-500
      "
      >

        © 2026 ShopFlow. All Rights Reserved.

      </div>

    </footer>

  );

}

export default Footer;