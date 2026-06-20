import { useState } from "react";
import { Upload } from "lucide-react";
import {
  ImagePlus,
  PackagePlus,
  IndianRupee,
  Shapes,
  FileText,
} from "lucide-react";
import api from "../api/axios";


function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/api/products",
        product
      );

      alert(
        "Product Added Successfully"
      );

      setProduct({
        name: "",
        description: "",
        category: "",
        price: "",
        imageUrl: "",
      });

    }
    catch (error) {

      console.log(error);

      alert(
        "Failed To Add Product"
      );

    }

  };

  return (

    <div className="max-w-5xl">

      <h1 className="text-5xl font-bold mb-10">

        Add Product

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

            <PackagePlus
              className="text-blue-500"
            />

            <h2 className="text-xl font-semibold">

              Product Name

            </h2>

          </div>

          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="iPhone 17 Pro"
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

            <FileText
              className="text-purple-500"
            />

            <h2 className="text-xl font-semibold">

              Description

            </h2>

          </div>

          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="5"
            placeholder="Premium flagship smartphone..."
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

              <IndianRupee
                className="text-green-500"
              />

              <h2 className="text-xl font-semibold">

                Price

              </h2>

            </div>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="149999"
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

              <Shapes
                className="text-yellow-500"
              />

              <h2 className="text-xl font-semibold">

                Category

              </h2>

            </div>

            <input
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Electronics"
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

            <ImagePlus
              className="text-pink-500"
            />

            <h2 className="text-xl font-semibold">

              Image URL

            </h2>

          </div>

          {/* <input
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="
            w-full
            p-5
            rounded-3xl
            bg-white
          "
          /> */}
{/* ========================== */}


          <div className="flex items-center gap-3 mb-3">

  <Upload className="text-blue-500" />

  <h2 className="text-xl font-semibold">

    Product Image

  </h2>

</div>

          <input
  type="file"
  accept="image/*"
  onChange={(event) => {

    const file = event.target.files[0];

    if (file) {

      setProduct({

        ...product,

        imageUrl: URL.createObjectURL(
          file
        ),

      });

    }

  }}
  className="
  w-full
  p-5
  rounded-3xl
  bg-white
"
/>

{
  product.imageUrl && (

    <img
      src={product.imageUrl}
      alt="Preview"
      className="
      mt-6
      h-72
      w-full
      object-cover
      rounded-[30px]
    "
    />

  )
}
{/* ============ */}

        </div>

        <button
          className="
          w-full
          bg-blue-500
          text-white
          p-5
          rounded-full
          text-xl
          hover:scale-105
          duration-300
        "
        >

          Add Product

        </button>

      </form>

    </div>

  );

}

export default AddProduct;