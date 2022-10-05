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
import PostsList from "./components/posts/posts-list";
import PostDetails from "./components/posts/post-details";
import UpdatePost from "./components/posts/update-post";

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
        <PrivateProtectRoute
          exact
          path="/update-post/:id"
          component={UpdatePost}
        />
        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
