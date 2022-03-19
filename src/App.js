import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import UserList from "./pages/userList/userList";
import User from "./pages/user/User";
import NewUser from "./pages/user/NewUser";
import Repository from "./pages/repository/repository";
import LoginButton from "./pages/login/login";
import Logout from "./pages/login/logout";
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    return <LoginButton />
  } else {
    return (
      <Router>
        <div className="App">
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/repository" element={<Repository />} />
              <Route path="/logout" element={<Logout />} />


            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
