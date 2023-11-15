import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Products from "./Routes/Home/Products";
import About from "./Routes/About";
import HomeBody from "./Routes/Home/HomeBody";
import Computer from "./Routes/Home/Products/Computer";
import Eltronics from "./Routes/Home/Products/Eletronics";
import Books from "./Routes/Home/Products/Books";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<HomeBody />}></Route>

            <Route path="product" element={<Products />}>
              <Route index element={<Navigate to={'/product/computer'}/>} />
              <Route path="computer" element={<Computer />} />
              <Route path="eletronics" element={<Eltronics />} />
              <Route path="books" element={<Books />} />
            </Route>

            <Route path="about" element={<About />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
