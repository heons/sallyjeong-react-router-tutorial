import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ backgroundColor: "#f5f5f5", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};


export default Layout;