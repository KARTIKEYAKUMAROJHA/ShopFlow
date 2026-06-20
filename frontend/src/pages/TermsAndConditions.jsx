import {
  FileText,
  Shield,
  Scale,
  CircleCheckBig,
} from "lucide-react";

function TermsAndConditions() {

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Terms & Conditions

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Please read these terms carefully before using ShopFlow.

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

          <FileText
            size={45}
            className="text-blue-500"
          />

          <h1 className="text-4xl font-bold">

            User Agreement

          </h1>

        </div>

        <p className="text-gray-600 text-xl leading-9 mt-10">

          By accessing ShopFlow, users agree to comply with
          all policies, security standards and responsible
          usage guidelines.

        </p>

      </div>

      {/* TERMS */}

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

          <Shield
            size={40}
            className="text-green-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Account Security

          </h1>

          <p className="text-gray-600 leading-8 mt-6">

            Users are responsible for protecting
            passwords and account credentials.

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

          <Scale
            size={40}
            className="text-purple-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Fair Usage

          </h1>

          <p className="text-gray-600 leading-8 mt-6">

            Any fraudulent activity or misuse
            may result in account suspension.

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

          <CircleCheckBig
            size={40}
            className="text-blue-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Order Policy

          </h1>

          <p className="text-gray-600 leading-8 mt-6">

            Orders are processed after successful
            payment verification.

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

          <FileText
            size={40}
            className="text-orange-500"
          />

          <h1 className="text-3xl font-bold mt-8">

            Policy Updates

          </h1>

          <p className="text-gray-600 leading-8 mt-6">

            ShopFlow reserves the right to modify
            policies and terms whenever required.

          </p>

        </div>

      </div>

      {/* FOOTER */}

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

        <h1 className="text-4xl font-bold">

          Thank You For Using ShopFlow

        </h1>

        <p className="text-xl mt-6">

          Your trust helps us deliver a premium shopping experience.

        </p>

      </div>

    </div>

  );

}

export default TermsAndConditions;