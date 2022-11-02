import Home from "./pages/Home";
import About from "./pages/About";
// import NotFound from "./pages/NotFound";
// import LogementDetails from "./pages/AccommodationSheet";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" component={About} />
      </Routes>
    </div>
  );
}

export default App;
