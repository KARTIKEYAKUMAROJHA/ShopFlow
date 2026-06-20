import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
  Globe,
} from "lucide-react";

function Contact() {

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Contact Us

        </h1>

        <p
          className="
          mt-5
          text-xl
          text-gray-500
        "
        >

          We'd love to hear from you.

        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT */}

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

          <h1 className="text-4xl font-bold">

            Get In Touch

          </h1>

          <div className="space-y-10 mt-12">

            <div className="flex gap-5 items-center">

              <Mail
                className="text-blue-500"
                size={35}
              />

              <div>

                <h2 className="text-2xl font-bold">

                  Email

                </h2>

                <p className="text-gray-500">

                  support@shopflow.com

                </p>

              </div>

            </div>

            <div className="flex gap-5 items-center">

              <Phone
                className="text-green-500"
                size={35}
              />

              <div>

                <h2 className="text-2xl font-bold">

                  Phone

                </h2>

                <p className="text-gray-500">

                  +91 9876543210

                </p>

              </div>

            </div>

            <div className="flex gap-5 items-center">

              <MapPin
                className="text-red-500"
                size={35}
              />

              <div>

                <h2 className="text-2xl font-bold">

                  Address

                </h2>

                <p className="text-gray-500">

                  New Delhi, India

                </p>

              </div>

            </div>

            <div className="flex gap-5 items-center">

              <Clock3
                className="text-yellow-500"
                size={35}
              />

              <div>

                <h2 className="text-2xl font-bold">

                  Working Hours

                </h2>

                <p className="text-gray-500">

                  Mon - Sat (9 AM - 8 PM)

                </p>

              </div>

            </div>

            <div className="flex gap-5 items-center">

              <Globe
                className="text-purple-500"
                size={35}
              />

              <div>

                <h2 className="text-2xl font-bold">

                  Website

                </h2>

                <p className="text-gray-500">

                  www.shopflow.com

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

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

          <h1 className="text-4xl font-bold">

            Send Message

          </h1>

          <div className="space-y-8 mt-10">

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              p-5
              rounded-3xl
              bg-white
              outline-none
            "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              p-5
              rounded-3xl
              bg-white
              outline-none
            "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
              w-full
              p-5
              rounded-3xl
              bg-white
              outline-none
            "
            />

            <textarea
              rows="7"
              placeholder="Write your message..."
              className="
              w-full
              p-5
              rounded-[30px]
              bg-white
              outline-none
            "
            />

            <button
              className="
              w-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
              text-white
              p-5
              rounded-full
              text-xl
              flex
              justify-center
              items-center
              gap-3
              hover:scale-105
              duration-300
            "
            >

              <Send />

              Send Message

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Contact;