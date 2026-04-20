import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mall from "./pages/Mall";

function App() {
  return (
    <Routes> // global route
      <Route path="/" element={<HomePage />} /> // route for homepage
      <Route path="/mall" element={<Mall />} /> // route for mall page
    </Routes>
  )
}

export default App;