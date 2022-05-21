import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>The first page of the application.</p>
      <ul>
        <li>
          <Link to="/about">Go to about page</Link>
        </li>
        <li>
          <Link to="/profile/huen">Profile - huen</Link>
        </li>
        <li>
          <Link to="/profile/gildong">Profile - gildong</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
