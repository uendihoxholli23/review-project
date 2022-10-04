import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AddReview from "./pages/AddReview";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
export default App;
