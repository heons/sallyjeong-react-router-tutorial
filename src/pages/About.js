import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToogleDetail = () => {
    setSearchParams({mode, detail: detail === 'true' ? 'false' : 'true'});
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1: parseInt(mode) + 1;
    setSearchParams({mode: nextMode.toString(), detail});
  };
  return (
    <div>
      <h1>About</h1>
      <p>About page of the application.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToogleDetail}>toggle detail</button>
      <button onClick={onIncreaseMode}>increase mode</button>
    </div>
  );
};

export default About;
