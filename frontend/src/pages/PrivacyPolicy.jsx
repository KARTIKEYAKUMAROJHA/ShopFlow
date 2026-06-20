import {
  Shield,
  Lock,
  Database,
  User,
} from "lucide-react";

function PrivacyPolicy() {

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Privacy Policy

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Your privacy and security are important to us.

        </p>

      </div>

      {/* INTRO */}

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

        <div className="flex items-center gap-4">

          <Shield
            className="text-blue-500"
            size={45}
          />

          <h1 className="text-4xl font-bold">

            ShopFlow Privacy Commitment

          </h1>

        </div>

        <p className="text-gray-600 text-xl leading-9 mt-10">

          ShopFlow respects your privacy and protects your
          personal information. We only collect information
          necessary to provide a secure and premium shopping
          experience.

        </p>

      </div>

      {/* SECTIONS */}

      <div className="grid lg:grid-cols-2 gap-10">

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

          <Lock
            className="text-green-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-8">

            Secure Information

          </h1>

          <p className="text-gray-600 mt-6 leading-8">

            All user data is protected through JWT,
            HTTPS and modern security practices.

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

          <Database
            className="text-purple-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-8">

            Data Storage

          </h1>

          <p className="text-gray-600 mt-6 leading-8">

            Customer information is securely stored
            inside PostgreSQL databases.

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

          <User
            className="text-orange-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-8">

            User Rights

          </h1>

          <p className="text-gray-600 mt-6 leading-8">

            Users can access, update or remove
            their personal information at any time.

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

          <Shield
            className="text-red-500"
            size={40}
          />

          <h1 className="text-3xl font-bold mt-8">

            No Third-Party Sharing

          </h1>

          <p className="text-gray-600 mt-6 leading-8">

            ShopFlow never sells or shares customer
            information with unauthorized parties.

          </p>

        </div>

      </div>

    </div>

  );

}

export default PrivacyPolicy;