import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!!! page not found</h3>
          <p>we cannot see the page you are looking for</p>
          <Link to="/dashboard">back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return <h1>Something went wrong</h1>;
};
export default Error;
