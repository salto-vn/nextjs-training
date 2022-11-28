import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
