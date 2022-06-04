import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontWeight: "bold",
    fontSize: "21",
  };

  return (
    <div>
      <ul>
        <ArticleItem id={1}/>
        <ArticleItem id={2}/>
        <ArticleItem id={3}/>
      </ul>
      <Outlet />
    </div>
  );
};

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: "green",
        fontWeight: "bold",
        fontSize: "21",
      };

    return (
        <li>
          <NavLink
            to={`/articles/${id}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Article {id}
          </NavLink>
        </li>
    );
};

export default Articles;
