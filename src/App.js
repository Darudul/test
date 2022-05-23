import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import OrderOverview from "./components/OrderOverview/OrderOverview";
import GrandPa from "./components/GrandPa/GrandPa";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route
          path="/orderOverview"
          element={<OrderOverview></OrderOverview>}
        ></Route>
        <Route path="/grandpa" element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
