import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div
      className="
      min-h-screen
      overflow-x-hidden
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-slate-200
      relative
    "
    >
      {/* Glow 1 */}
      <div
        className="
        fixed
        top-[-200px]
        left-[-150px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-300/20
        blur-[140px]
        pointer-events-none
      "
      />

      {/* Glow 2 */}
      <div
        className="
        fixed
        bottom-[-250px]
        right-[-200px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-cyan-300/20
        blur-[160px]
        pointer-events-none
      "
      />

      {/* Glow 3 */}
      <div
        className="
        fixed
        top-[30%]
        right-[20%]
        h-[350px]
        w-[350px]
        rounded-full
        bg-white/30
        blur-[120px]
        pointer-events-none
      "
      />

      {/* Main Content */}
      <div className="relative z-10">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;