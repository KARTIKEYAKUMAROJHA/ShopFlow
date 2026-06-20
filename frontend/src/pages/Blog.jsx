import {
  Calendar,
  ArrowRight,
  User,
} from "lucide-react";

function Blog() {

  const blogs = [

    {
      id: 1,
      title: "Spring Boot Microservices Architecture",
      author: "Kartik Ojha",
      date: "15 June 2026",
      image: "https://picsum.photos/700?1",
    },

    {
      id: 2,
      title: "Kafka Event Driven Communication",
      author: "Kartik Ojha",
      date: "14 June 2026",
      image: "https://picsum.photos/700?2",
    },

    {
      id: 3,
      title: "Docker Deployment Guide",
      author: "Kartik Ojha",
      date: "13 June 2026",
      image: "https://picsum.photos/700?3",
    },

  ];

  return (

    <div className="space-y-12">

      <div>

        <h1 className="text-6xl font-bold">

          Blog

        </h1>

        <p className="text-xl text-gray-500 mt-5">

          Latest articles and technology updates.

        </p>

      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10">

        {

          blogs.map(

            (blog) => (

              <div
                key={blog.id}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                overflow-hidden
                hover:scale-[1.02]
                duration-300
              "
              >

                <img
                  src={blog.image}
                  className="
                  h-64
                  w-full
                  object-cover
                "
                />

                <div className="p-8">

                  <h1 className="text-3xl font-bold">

                    {blog.title}

                  </h1>

                  <div className="flex items-center gap-3 mt-6">

                    <User
                      className="text-blue-500"
                    />

                    {blog.author}

                  </div>

                  <div className="flex items-center gap-3 mt-4">

                    <Calendar
                      className="text-purple-500"
                    />

                    {blog.date}

                  </div>

                  <button
                    className="
                    mt-8
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

                    Read More

                    <ArrowRight />

                  </button>

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default Blog;