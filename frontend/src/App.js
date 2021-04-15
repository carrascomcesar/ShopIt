import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/login" component={Login} />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
