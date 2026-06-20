import {
  Briefcase,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

function Careers() {

  const jobs = [

    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
    },

    {
      id: 2,
      title: "Java Spring Boot Developer",
      location: "India",
      type: "Full Time",
    },

    {
      id: 3,
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full Time",
    },

  ];

  return (

    <div className="space-y-12">

      <div>

        <h1 className="text-6xl font-bold">

          Careers

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Join the team building the future of ShopFlow.

        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {

          jobs.map(

            (job) => (

              <div
                key={job.id}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                p-10
                hover:scale-[1.02]
                duration-300
              "
              >

                <div className="flex items-center gap-4">

                  <Briefcase
                    className="text-blue-500"
                    size={40}
                  />

                  <h1 className="text-4xl font-bold">

                    {job.title}

                  </h1>

                </div>

                <div className="space-y-5 mt-10">

                  <div className="flex items-center gap-3">

                    <MapPin
                      className="text-red-500"
                    />

                    {job.location}

                  </div>

                  <div className="flex items-center gap-3">

                    <Clock3
                      className="text-green-500"
                    />

                    {job.type}

                  </div>

                </div>

                <button
                  className="
                  mt-10
                  bg-blue-500
                  text-white
                  px-8
                  py-4
                  rounded-full
                  flex
                  items-center
                  gap-3
                  hover:scale-105
                  duration-300
                "
                >

                  Apply Now

                  <ArrowRight />

                </button>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default Careers;