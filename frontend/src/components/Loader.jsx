function Loader() {

  return (

    <div
      className="
      min-h-[70vh]
      flex
      items-center
      justify-center
      px-5
    "
    >

      <div
        className="
        rounded-[40px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-[0_10px_60px_rgba(0,0,0,0.08)]
        px-12
        py-14
        flex
        flex-col
        items-center
        gap-8
      "
      >

        <div className="relative">

          <div
            className="
            h-24
            w-24
            rounded-full
            border-[10px]
            border-blue-100
          "
          />

          <div
            className="
            absolute
            inset-0
            h-24
            w-24
            rounded-full
            border-[10px]
            border-transparent
            border-t-blue-500
            border-r-cyan-400
            animate-spin
          "
          />

        </div>

        <div className="text-center">

          <h1
            className="
            text-4xl
            font-bold
          "
          >

            Loading...

          </h1>

          <p
            className="
            mt-4
            text-gray-500
            text-lg
            leading-8
            max-w-md
          "
          >

            Please wait while we prepare your premium shopping experience.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Loader;