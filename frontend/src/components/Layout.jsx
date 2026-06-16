import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-32 px-5 min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;