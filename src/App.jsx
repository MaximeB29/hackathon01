import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz/Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
