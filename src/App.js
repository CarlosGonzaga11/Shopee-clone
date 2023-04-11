import "./App.css";

import Car from "./components/Car/Car";
import { Route, BrowserRouter,Routes } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";

import Home from './pages/Homi/Home';
// import Car from "./components/Car/Car";
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
    <Route element = { <Home/> }  path="/" exact />
    <Route element = { <Car/> } path="/car" exact/>
    </Routes>
</BrowserRouter>
  </CartProvider>

  );
}

export default App;
