import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navBar">
          <Link className="navBar item" to="/"> 
            Home
          </Link>
          <Link className="navBar item" to="/About">
            About
          </Link>
          <Link className="navBar item" to="/Contact">
            Contact
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <div>
          <ul className="footer">
            <li>email</li>
            <li>Contact number</li>
            <li>about us</li>
            <li>component inc </li>
            <li>coliges</li>
            <li>work</li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
