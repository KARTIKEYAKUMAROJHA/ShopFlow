import { useState } from "react";
import {
  Pencil,
  ImagePlus,
  Shapes,
  IndianRupee,
  FileText,
} from "lucide-react";

function UpdateProduct() {

  const [product, setProduct] = useState({

    name: "iPhone 17 Pro",

    description: "Premium flagship smartphone",

    price: "149999",

    category: "Electronics",

    image: null,

  });

  function handleChange(event) {

    const { name, value } = event.target;

    setProduct({

      ...product,

      [name]: value,

    });

  }

  function handleImageChange(event) {

    setProduct({

      ...product,

      image: event.target.files[0],

    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    console.log(product);

    alert(
      "Product Updated Successfully"
    );

  }

  return (

    <div className="max-w-5xl">

      <h1 className="text-5xl font-bold mb-10">

        Update Product

      </h1>

      <form

        onSubmit={handleSubmit}

        className="
        rounded-[40px]
        border border-white/20
        bg-white/15
        backdrop-blur-2xl
        shadow-xl
        p-10
        space-y-8
      "
      >

        <div>

          <div className="flex items-center gap-3 mb-3">

            <Pencil className="text-blue-500" />

            <h2 className="text-xl font-semibold">

              Product Name

            </h2>

          </div>

          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white
          "
          />

        </div>

        <div>

          <div className="flex items-center gap-3 mb-3">

            <FileText className="text-purple-500" />

            <h2 className="text-xl font-semibold">

              Description

            </h2>

          </div>

          <textarea
            rows="5"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white
          "
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <div className="flex items-center gap-3 mb-3">

              <IndianRupee className="text-green-500" />

              <h2 className="text-xl font-semibold">

                Price

              </h2>

            </div>

            <input
              name="price"
              value={product.price}
              onChange={handleChange}
              className="
              w-full
              p-5
              rounded-3xl
              bg-white
            "
            />

          </div>

          <div>

            <div className="flex items-center gap-3 mb-3">

              <Shapes className="text-yellow-500" />

              <h2 className="text-xl font-semibold">

                Category

              </h2>

            </div>

            <input
              name="category"
              value={product.category}
              onChange={handleChange}
              className="
              w-full
              p-5
              rounded-3xl
              bg-white
            "
            />

          </div>

        </div>

        <div>

          <div className="flex items-center gap-3 mb-3">

            <ImagePlus className="text-pink-500" />

            <h2 className="text-xl font-semibold">

              Product Image

            </h2>

          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white
          "
          />

        </div>

        <button
          type="submit"
          className="
          w-full
          bg-green-500
          text-white
          p-5
          rounded-full
          text-xl
          hover:scale-105
          duration-300
        "
        >

          Update Product

        </button>

      </form>

    </div>

  );

}

export default UpdateProduct;