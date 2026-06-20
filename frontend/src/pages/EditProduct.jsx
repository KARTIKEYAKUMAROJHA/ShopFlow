import { useState } from "react";
import {
  Package,
  Image,
  BadgeIndianRupee,
  Boxes,
  FileText,
  Save,
} from "lucide-react";

function EditProduct() {

  const [product, setProduct] = useState({

    name: "iPhone 17 Pro",

    price: 149999,

    category: "Electronics",

    stock: 25,

    imageUrl: "https://picsum.photos/800",

    description:
      "Latest flagship smartphone with premium features.",

  });

  const handleChange = (e) => {

    setProduct({

      ...product,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Product Updated Successfully"
    );

  };

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Edit Product

        </h1>

        <p className="mt-5 text-xl text-gray-500">

          Update product information.

        </p>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="
        rounded-[50px]
        border border-white/20
        bg-white/20
        backdrop-blur-3xl
        shadow-2xl
        p-12
        space-y-10
      "
      >

        {/* Product Name */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Package
              className="text-blue-500"
            />

            <h2 className="text-2xl font-bold">

              Product Name

            </h2>

          </div>

          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

        {/* Price */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <BadgeIndianRupee
              className="text-green-500"
            />

            <h2 className="text-2xl font-bold">

              Price

            </h2>

          </div>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

        {/* Category */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Boxes
              className="text-purple-500"
            />

            <h2 className="text-2xl font-bold">

              Category

            </h2>

          </div>

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

        {/* Stock */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Boxes
              className="text-orange-500"
            />

            <h2 className="text-2xl font-bold">

              Stock

            </h2>

          </div>

          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

        {/* Image URL */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Image
              className="text-pink-500"
            />

            <h2 className="text-2xl font-bold">

              Image URL

            </h2>

          </div>

          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/40
            outline-none
          "
          />

        </div>

        {/* Description */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <FileText
              className="text-cyan-500"
            />

            <h2 className="text-2xl font-bold">

              Description

            </h2>

          </div>

          <textarea
            rows="6"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-[30px]
            bg-white/40
            outline-none
          "
          />

        </div>

        {/* SAVE */}

        <button
          className="
          w-full
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          text-white
          py-5
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

          <Save />

          Update Product

        </button>

      </form>

    </div>

  );

}

export default EditProduct;