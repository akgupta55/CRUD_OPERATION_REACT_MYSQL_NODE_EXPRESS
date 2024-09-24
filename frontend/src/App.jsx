import "./App.css";
import { Routes, Route } from "react-router-dom";
import Books from "./Components/Books";
import Add from "./Components/Add";
import Update from "./Components/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
}

export default App;
