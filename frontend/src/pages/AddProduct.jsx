import { useState } from "react";
import {
  PackagePlus,
  Tag,
  IndianRupee,
  Boxes,
  Image,
  BadgePercent,
  Star,
  Flame,
  Save,
} from "lucide-react";

function AddProduct() {

  const [formData, setFormData] = useState({

    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    imageUrl: "",
    discount: "",
    featured: false,
    trending: false,

  });

  function handleChange(event) {

    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData({

      ...formData,

      [name]:

        type === "checkbox"

          ? checked

          : value,

    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    console.log(formData);

    alert(
      "Product Ready For Backend Integration"
    );

  }

  return (

    <div className="space-y-12">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Add Product

        </h1>

        <p className="text-gray-500 text-xl mt-5">

          Create premium products for ShopFlow.

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

            <PackagePlus className="text-blue-500" />

            <h2 className="text-2xl font-bold">

              Product Name

            </h2>

          </div>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="iPhone 17 Pro"
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/60
            outline-none
          "
          />

        </div>

        {/* Description */}

        <div>

          <h2 className="text-2xl font-bold mb-4">

            Description

          </h2>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="
            w-full
            rounded-3xl
            bg-white/60
            p-5
            outline-none
          "
          />

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <IndianRupee className="text-green-500" />

              <h2 className="text-2xl font-bold">

                Price

              </h2>

            </div>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="
              w-full
              p-5
              rounded-3xl
              bg-white/60
              outline-none
            "
            />

          </div>

          <div>

            <div className="flex items-center gap-3 mb-4">

              <Boxes className="text-purple-500" />

              <h2 className="text-2xl font-bold">

                Stock

              </h2>

            </div>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="
              w-full
              p-5
              rounded-3xl
              bg-white/60
              outline-none
            "
            />

          </div>

        </div>

        {/* CATEGORY + BRAND */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <Tag className="text-blue-500" />

              <h2 className="text-2xl font-bold">

                Category

              </h2>

            </div>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
              w-full
              p-5
              rounded-3xl
              bg-white/60
              outline-none
            "
            >

              <option>Electronics</option>
              <option>Fashion</option>
              <option>Shoes</option>
              <option>Accessories</option>

            </select>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">

              Brand

            </h2>

            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Apple"
              className="
              w-full
              p-5
              rounded-3xl
              bg-white/60
              outline-none
            "
            />

          </div>

        </div>

        {/* IMAGE */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <Image className="text-pink-500" />

            <h2 className="text-2xl font-bold">

              Image URL

            </h2>

          </div>

          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/60
            outline-none
          "
          />

        </div>

        {/* DISCOUNT */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <BadgePercent className="text-red-500" />

            <h2 className="text-2xl font-bold">

              Discount %

            </h2>

          </div>

          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="
            w-full
            p-5
            rounded-3xl
            bg-white/60
            outline-none
          "
          />

        </div>

        {/* SWITCHES */}

        <div className="grid md:grid-cols-2 gap-8">

          <div
            className="
            rounded-3xl
            bg-white/40
            p-8
            flex
            justify-between
            items-center
          "
          >

            <div>

              <div className="flex items-center gap-3">

                <Star className="text-yellow-500" />

                <h2 className="text-2xl font-bold">

                  Featured Product

                </h2>

              </div>

            </div>

            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />

          </div>

          <div
            className="
            rounded-3xl
            bg-white/40
            p-8
            flex
            justify-between
            items-center
          "
          >

            <div>

              <div className="flex items-center gap-3">

                <Flame className="text-orange-500" />

                <h2 className="text-2xl font-bold">

                  Trending Product

                </h2>

              </div>

            </div>

            <input
              type="checkbox"
              name="trending"
              checked={formData.trending}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* BUTTON */}

        <button
          className="
          w-full
          rounded-full
          py-5
          text-2xl
          text-white
          shadow-xl
          bg-gradient-to-r
          from-blue-500
          to-cyan-400
          hover:scale-105
          duration-300
          flex
          justify-center
          items-center
          gap-4
        "
        >

          <Save />

          Save Product

        </button>

      </form>

    </div>

  );

}

export default AddProduct;