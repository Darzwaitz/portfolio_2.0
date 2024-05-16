import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SidebarNav from "./SidebarNav";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <SidebarNav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
