import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

const Studio = lazy(() => import("./pages/Studio"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route
        path="/studio/*"
        element={
          <Suspense fallback={null}>
            <Studio />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
