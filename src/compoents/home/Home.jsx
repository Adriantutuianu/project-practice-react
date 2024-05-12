import Api1 from "../api1-Math-facts/Api1";
import Api2 from "../api2-Random-facts/Api2";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main-section">
        <div className="api-1and-2">
          <Api1 />
          <Api2 />
        </div>
      </div>
    </>
  );
};
export default Home;
