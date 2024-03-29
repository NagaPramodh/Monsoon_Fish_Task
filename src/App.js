import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./components/Form";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropdownComponent from "./components/DropdownComponent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <nav
          className="navbar navbar-dark bg-primary"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="text-light display-3">Monsoon Fish</span>
        </nav>
        <div className="container mt-3">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormComponent />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
