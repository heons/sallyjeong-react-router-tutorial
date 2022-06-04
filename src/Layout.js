import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goArticle = () => {
    navigate("/articles", {replace: true});
  };

  return (
    <div>
      <header style={{ backgroundColor: "#f5f5f5", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>Back</button>
        <button onClick={goArticle}>Articles</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
