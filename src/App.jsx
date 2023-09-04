import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Components/Cart";
import "./App.css";
import Search from "../Components/Serach/Search";
import Content from "../Components/content/Content";
import Register from "../Components/Login/Register";
import Login from "../Components/Login/Login";
import Prime from "../Components/Prime/Prime";
import Watchlist from "../Components/Watchlist/Watchlist";
import Profile from "../Components/Profile/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/content" element={<Content />}></Route>
          <Route path="/cart1" element={<Cart />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/prime" element={<Prime />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
