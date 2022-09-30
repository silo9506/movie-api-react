import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
