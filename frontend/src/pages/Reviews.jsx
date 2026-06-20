import {
  Star,
  MessageSquare,
  ThumbsUp,
  CircleUserRound,
} from "lucide-react";

function Reviews() {

  const reviews = [

    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment:
        "Amazing quality and premium shopping experience.",
      image: "https://i.pravatar.cc/300?img=11",
    },

    {
      id: 2,
      name: "Aman Kumar",
      rating: 4,
      comment:
        "Fast delivery and excellent packaging.",
      image: "https://i.pravatar.cc/300?img=12",
    },

    {
      id: 3,
      name: "Priya Singh",
      rating: 5,
      comment:
        "Apple-level UI and smooth checkout process.",
      image: "https://i.pravatar.cc/300?img=13",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Customer Reviews

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          What our customers say about ShopFlow.

        </p>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-8">

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <Star
            size={45}
            className="mx-auto text-yellow-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            4.9

          </h1>

          <h2 className="mt-4 text-xl">

            Average Rating

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <MessageSquare
            size={45}
            className="mx-auto text-blue-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            1200+

          </h1>

          <h2 className="mt-4 text-xl">

            Reviews

          </h2>

        </div>

        <div
          className="
          rounded-[40px]
          bg-white/20
          border border-white/20
          backdrop-blur-3xl
          p-10
          shadow-xl
          text-center
        "
        >

          <ThumbsUp
            size={45}
            className="mx-auto text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">

            98%

          </h1>

          <h2 className="mt-4 text-xl">

            Positive Feedback

          </h2>

        </div>

      </div>

      {/* REVIEW LIST */}

      <div className="space-y-8">

        {

          reviews.map(

            (review) => (

              <div
                key={review.id}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/20
                backdrop-blur-3xl
                shadow-xl
                p-8
              "
              >

                <div className="flex items-center gap-6">

                  <img
                    src={review.image}
                    alt=""
                    className="
                    h-20
                    w-20
                    rounded-full
                    object-cover
                  "
                  />

                  <div>

                    <h1 className="text-2xl font-bold">

                      {review.name}

                    </h1>

                    <div className="flex gap-1 mt-3">

                      {

                        Array(review.rating)
                          .fill()
                          .map((_, index) => (

                            <Star
                              key={index}
                              size={18}
                              className="text-yellow-500 fill-yellow-500"
                            />

                          ))

                      }

                    </div>

                  </div>

                </div>

                <p className="text-gray-500 mt-8 leading-8 text-lg">

                  {review.comment}

                </p>

              </div>

            )

          )

        }

      </div>

      {/* ADD REVIEW */}

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

        <div className="flex items-center gap-5">

          <CircleUserRound size={45} />

          <div>

            <h1 className="text-4xl font-bold">

              Share Your Experience

            </h1>

            <p className="text-xl mt-4">

              Your feedback helps us improve ShopFlow.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Reviews;