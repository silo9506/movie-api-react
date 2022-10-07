import { Fragment } from "react";
import GlobalStyles from "./GlobalStyles ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/templates/Detail";
import Home from "./components/templates/Home";
import Search from "./components/templates/Search";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
          <Route path="/search/:query" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
