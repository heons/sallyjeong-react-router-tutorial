import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>About</h1>
      <p>About page of the application.</p>
    </div>
  );
};

export default About;
