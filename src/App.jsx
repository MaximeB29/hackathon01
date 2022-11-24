import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/destination/:id" element={<Destination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
