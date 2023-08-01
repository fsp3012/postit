import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";
import MyStories from "./pages/MyStories";
import Feeds from "./pages/Feeds";
import CreateStory from "./pages/CreateStory";
import EditStory from "./pages/EditStory";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="my-stories" element={<MyStories />} />
              <Route path="feeds" element={<Feeds/>} />
              <Route path="create-story" element={<CreateStory/>} />
              <Route path="edit-story/:id" element={<EditStory/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
