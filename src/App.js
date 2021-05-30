import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductLists from "./containers/ProductLists";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Shopping Using Redux</h1>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductLists} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
