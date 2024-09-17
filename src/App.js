import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Update from "./pages/Update";
import "./style.css";
import Header from "./pages/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
