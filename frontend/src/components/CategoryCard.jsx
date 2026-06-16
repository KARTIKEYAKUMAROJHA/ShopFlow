function CategoryCard({ name }) {
  return (
    <div
      className="
      rounded-3xl
      border border-white/20
      bg-white/15
      backdrop-blur-xl
      shadow-lg
      p-8
      text-center
      transition duration-300
      hover:scale-105
    "
    >
      <h2 className="text-xl font-semibold">
        {name}
      </h2>
    </div>
  );
}

export default CategoryCard;