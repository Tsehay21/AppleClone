import React from "react";
import "./App.css";
import "./components/Resources/apple-responsive-replica-html-css-mar-2020/css/bootstrap.css";
import "./components/Resources/apple-responsive-replica-html-css-mar-2020/css/styles.css";
import "./components/Resources/apple-responsive-replica-html-css-mar-2020/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import SharedVideos from "./components/YouTube/SharedVideos";
import Mac from "./Pages/Mac/Mac";
import Iphone from "./Pages/Iphone/Iphone";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import Tv from "./Pages/Tv/Tv";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Four04 from "./Pages/Four04/Four04";
import SharedLayout from "./Pages/SharedLayout/SharedLayout";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<ProductPage />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />

          <Route path="/" element={<SharedVideos />}>
            <Route path="tv" element={<Tv />} />
            <Route path="music" element={<Music />} />
          </Route>
          <Route path="support" element={<Support />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
