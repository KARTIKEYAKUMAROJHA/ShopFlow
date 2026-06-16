import ProductCard from "../components/ProductCard";
import FeatureCard from "../components/FeatureCard";
import CategoryCard from "../components/CategoryCard";

import { products } from "../assets/products";

function Home() {
  return (
    <div>

      {/* Hero Section */}

      <section className="text-center mt-10">

        <h1 className="text-6xl font-bold mb-6">
          Discover the Best Products
        </h1>

        <p className="text-2xl text-gray-700 mb-10">
          Premium quality products for everyone
        </p>

      </section>

      {/* Features */}

      <section className="grid md:grid-cols-3 gap-8 mt-20">

        <FeatureCard
          title="Premium Quality"
          description="Top quality products from trusted brands."
        />

        <FeatureCard
          title="Secure Shopping"
          description="Your data is protected with best security."
        />

        <FeatureCard
          title="Fast Delivery"
          description="Quick and reliable delivery."
        />

      </section>

      {/* Categories */}

      <section className="mt-20">

        <h1 className="text-4xl font-bold mb-10">
          Categories
        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          <CategoryCard name="Electronics" />

          <CategoryCard name="Fashion" />

          <CategoryCard name="Books" />

          <CategoryCard name="Sports" />

        </div>

      </section>

      {/* Products */}

      <section className="mt-20">

        <h1 className="text-4xl font-bold mb-10">
          Featured Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;