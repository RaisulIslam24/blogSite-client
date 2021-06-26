import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddBlog from "./components/Admin/AddBlog/AddBlog";
import Admin from "./components/Admin/Admin/Admin";
import Login from "./components/Admin/Login/Login/Login";
import PrivateRoute from "./components/Admin/Login/PrivateRoute/PrivateRoute";
import ManageBlogs from "./components/Admin/ManageBlogs/ManageBlogs";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="/addBlog">
            <AddBlog />
          </Route>
          <Route path="/manageBlogs">
            <ManageBlogs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
