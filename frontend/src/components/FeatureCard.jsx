function FeatureCard({ title, description }) {
  return (
    <div
      className="
      rounded-3xl
      border border-white/20
      bg-white/15
      backdrop-blur-xl
      shadow-lg
      p-8
      transition duration-300
      hover:scale-105
    "
    >
      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;