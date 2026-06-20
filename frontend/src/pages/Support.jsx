import {
  Headset,
  Mail,
  Phone,
  MessageSquare,
  Clock3,
  CircleHelp,
  Send,
} from "lucide-react";

function Support() {

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Customer Support

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          We're here to help you 24×7.

        </p>

      </div>

      {/* SUPPORT OPTIONS */}

      <div className="grid lg:grid-cols-3 gap-10">

        <div
          className="
          rounded-[45px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <Mail
            size={50}
            className="text-blue-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Email Support

          </h1>

          <p className="text-gray-500 mt-5">

            support@shopflow.com

          </p>

        </div>

        <div
          className="
          rounded-[45px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <Phone
            size={50}
            className="text-green-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Call Support

          </h1>

          <p className="text-gray-500 mt-5">

            +91 9876543210

          </p>

        </div>

        <div
          className="
          rounded-[45px]
          border border-white/20
          bg-white/15
          backdrop-blur-2xl
          shadow-xl
          p-10
        "
        >

          <MessageSquare
            size={50}
            className="text-purple-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Live Chat

          </h1>

          <p className="text-gray-500 mt-5">

            Available 24×7

          </p>

        </div>

      </div>

      {/* HELP CENTER */}

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

        <div className="flex items-center gap-4">

          <CircleHelp
            size={40}
            className="text-blue-500"
          />

          <h1 className="text-4xl font-bold">

            Help Center

          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-[30px] p-8">

            <h2 className="text-2xl font-bold">

              Order Issues

            </h2>

            <p className="mt-4 text-gray-500">

              Delivery, refund and tracking support.

            </p>

          </div>

          <div className="bg-white rounded-[30px] p-8">

            <h2 className="text-2xl font-bold">

              Payment Support

            </h2>

            <p className="mt-4 text-gray-500">

              Card, UPI and transaction related help.

            </p>

          </div>

          <div className="bg-white rounded-[30px] p-8">

            <h2 className="text-2xl font-bold">

              Account Support

            </h2>

            <p className="mt-4 text-gray-500">

              Login and profile related issues.

            </p>

          </div>

          <div className="bg-white rounded-[30px] p-8">

            <h2 className="text-2xl font-bold">

              Technical Support

            </h2>

            <p className="mt-4 text-gray-500">

              Website and application problems.

            </p>

          </div>

        </div>

      </div>

      {/* CONTACT FORM */}

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

        <div className="flex items-center gap-4 mb-10">

          <Headset
            className="text-blue-500"
          />

          <h1 className="text-4xl font-bold">

            Submit Ticket

          </h1>

        </div>

        <div className="space-y-8">

          <input
            type="text"
            placeholder="Full Name"
            className="
            w-full
            bg-white
            rounded-3xl
            p-5
            outline-none
          "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
            w-full
            bg-white
            rounded-3xl
            p-5
            outline-none
          "
          />

          <textarea
            rows="6"
            placeholder="Describe your issue..."
            className="
            w-full
            bg-white
            rounded-[30px]
            p-5
            outline-none
          "
          />

          <button
            className="
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            text-white
            px-10
            py-5
            rounded-full
            text-xl
            flex
            items-center
            gap-3
            hover:scale-105
            duration-300
          "
          >

            <Send />

            Submit Ticket

          </button>

        </div>

      </div>

      {/* FOOTER CARD */}

      <div
        className="
        rounded-[50px]
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        p-14
        shadow-2xl
      "
      >

        <div className="flex items-center gap-4">

          <Clock3 size={45} />

          <div>

            <h1 className="text-4xl font-bold">

              24×7 Premium Support

            </h1>

            <p className="mt-4 text-xl">

              Our team is always available to assist you.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Support;