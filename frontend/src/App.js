import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
