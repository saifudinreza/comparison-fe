import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mall from "./pages/Mall";
import Detail from "./pages/Detail";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        {" "}
        // global route // global route // protected route
        <Route element={<Layout />}>
          {" "}
          // layout route
          <Route index element={<HomePage />} /> // route for homepage
          <Route path="/mall" element={<Mall />} /> // route for mall page
        </Route>
      </Routes>
    </>
  );
}

export default App;