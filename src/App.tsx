import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogComingSoon from "./pages/BlogComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogComingSoon />} />
      <Route path="/blog/:slug" element={<BlogComingSoon />} />
    </Routes>
  );
}

export default App;
