import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>The first page of the application.</p>
      <Link to="/about">Go to about page</Link>
    </div>
  );
};

export default Home;
