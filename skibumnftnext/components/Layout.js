import Analytics from "./Analytics";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Analytics>
      <Navbar />
      <div className="flex justify-center bg-black">
        <img
          className="  lg:h-87 md:h-90"
          src="/hero5.png"
          alt="Hero Title Image Ski Bum NFT"
        />
      </div>
      {children}
      <Footer />
    </Analytics>
  );
};
export default Layout;
