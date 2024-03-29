import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="whole-home-page">
      <div className="h3 whole-header">Welcome to the Home Page</div>
      <div className="d-flex justify-content-center">
        <Link to="/form" className="btn btn-primary">
          Click here to fill the form
        </Link>
      </div>
    </div>
  );
}
export default Home;
