import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz/Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
