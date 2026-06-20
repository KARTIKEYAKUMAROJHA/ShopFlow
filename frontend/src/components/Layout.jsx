import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {

  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-purple-100
    "
    >

      <Navbar />

      <main
        className="
        max-w-[1600px]
        mx-auto
        px-6
        md:px-10
        pt-36
        pb-20
      "
      >

        {children}

      </main>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pb-10">

        <Footer />

      </div>

    </div>

  );

}

export default Layout;