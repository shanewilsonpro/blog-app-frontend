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
import UpdateComment from "./components/comments/update-comment";
import Profile from "./components/users/profile/profile";
import UploadProfilePhoto from "./components/users/profile/upload-profile-photo";
import UpdateProfileForm from "./components/users/profile/update-profile-form";
import SendEmail from "./components/users/emailing/send-email";
import AccountVerified from "./components/users/account-verification/account-verified";

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
        <PrivateProtectRoute
          exact
          path="/upload-profile-photo"
          component={UploadProfilePhoto}
        />
        <PrivateProtectRoute
          exact
          path="/update-profile/:id"
          component={UpdateProfileForm}
        />
        <PrivateProtectRoute
          exact
          path="/verify-account/:token"
          component={AccountVerified}
        />
        <PrivateProtectRoute exact path="/send-mail" component={SendEmail} />
        <PrivateProtectRoute exact path="/profile/:id" component={Profile} />
        <PrivateProtectRoute exact path="/create-post" component={CreatePost} />
        <PrivateProtectRoute
          exact
          path="/update-post/:id"
          component={UpdatePost}
        />
        <PrivateProtectRoute
          exact
          path="/update-comment/:id"
          component={UpdateComment}
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
