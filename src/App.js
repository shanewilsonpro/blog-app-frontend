import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/home-page";
import Register from "./components/users/register/register-page";
import Login from "./components/users/login/login-page";
import Navbar from "./components/navigation/navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
