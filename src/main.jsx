import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/index";


// El componente que renderiza las diferentes páginas
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

