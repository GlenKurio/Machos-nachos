import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";

function Layout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
