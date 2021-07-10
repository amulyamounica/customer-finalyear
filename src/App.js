import Header from "./header.js";
import Scroller from "./Scroller.js";
import react, { useState } from "react";
import Home from "./home";
import Login from "./forms/login";
import Catelogue from "./Catelog/Catelogue";
import About from "./About";
import Contact from "./Contact";
import Faqs from "./Faqs";
import Other from "./Other";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Grocery from "./Items/item1";
import data from "./data/data.json";
import Signup from "./forms/Signup";
import Logout from "./Logout";
import forgot from "./forgot";
import Location from "./Location";
import Kandukur from "./data/Kandukur.json";
import Success from "./Success";
import Ongole from "./data/Ongole.json";
import update from "./data/update.json";
import Vendor from "./forms/VendorLogin";
import Payment from "./Payment";
import UpdateItems from "./UpdateItems";
import Orders from "./Orders";
import sign from "./data/sign.json";
import Person from "./Person";

import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";

function App() {
  console.log("refresing app");
  localStorage.setItem("vendors", JSON.stringify(update));
  localStorage.setItem("users", JSON.stringify(sign));
  localStorage.setItem("items", JSON.stringify(data));
  localStorage.setItem("Cart", JSON.stringify([]));
  localStorage.setItem("Kandukur", JSON.stringify(Kandukur));
  localStorage.setItem("Ongole", JSON.stringify(Ongole));
  localStorage.setItem("session", "user");
  if (localStorage.getItem("CartItems")) {
    var k = Object.keys(JSON.parse(localStorage.getItem("CartItems"))).length;
  } else {
    var k = 0;
  }
  var p = true;
  const [count, setCount] = useState(k);
  if (localStorage.getItem("session1") == "user") {
    p = false;
  }
  const [login, setLogin] = useState(p);
  const updateCartCount = () => {
    console.log("app", count);
    setCount(count + 1);
  };
  const updateLogin = () => {
    console.log("coming to login function");
    setLogin(true);
  };
  const updateLogout = () => {
    setLogin(false);
  };
  return (
    <div className="App">
      <Header count={count} login={login} />
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route
            path="/Login"
            component={(props) => <Login updateLogin={() => updateLogin()} />}
          />
          <Route
            path="/Signup"
            component={(props) => <Signup updateLogin={() => updateLogin()} />}
          />
          <Route path="/Catelogue" component={Catelogue} />
          <Route path="/Faqs" component={Faqs} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Other" component={Other} />
          <Route path="/forgot" component={forgot} />
          <Route path="/Person" component={Person} />
          <Route
            path="/items"
            component={(props) => (
              <Grocery updateCount={() => updateCartCount()} />
            )}
          />
          <Route
            path="/Cart"
            component={(props) => <Cart count={() => count} />}
          />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/Logout" component={Logout} />
          <Route path="/Vendor" component={Vendor} />
          <Route path="/Location" component={Location} />
          <Route path="/Vendor" component={Vendor} />
          <Route path="/Payment" component={Payment} />
          <Route path="/UpdateItems" component={UpdateItems} />
          <Route path="/Success" component={Success} />
          <Route path="/Orders" component={Orders} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
