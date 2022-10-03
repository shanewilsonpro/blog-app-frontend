import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/home-page";
import Register from "./components/users/register/register-page";
import Login from "./components/users/login/login-page";
import Navbar from "./components/navigation/navbar";
import AddNewCategory from "./components/categories/add-new-category";
import CategoryList from "./components/categories/category-list";
import UpdateCategory from "./components/categories/update-category";
import PrivateProtectRoute from "./components/navigation/protected/private-protect-route";
import AdminRoute from "./components/navigation/protected/admin-route";
import CreatePost from "./components/posts/create-post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <AdminRoute
          exact
          path="/update-category/:id"
          component={UpdateCategory}
        />
        <AdminRoute exact path="/add-category" component={AddNewCategory} />
        <AdminRoute exact path="/category-list" component={CategoryList} />
        <PrivateProtectRoute exact path="/create-post" component={CreatePost} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
