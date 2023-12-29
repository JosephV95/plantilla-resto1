import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

export default function LayoutPrincipal() {
  return (
    <>
      <Nav />
        <Outlet></Outlet>
      <Footer />
    </>
  );
}
