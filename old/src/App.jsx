import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mall from "./pages/Mall";
import Detail from "./pages/Detail";
import Layout from "./Layout";
import ProtectedRouter from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

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
          <Route path="/login" element={<Login />} /> // route for login page
          <Route path="*" element={<NotFound />} /> // route for 404 not found page
          <Route element={<ProtectedRouter />}>
            <Route path="/mall" element={<Mall />} /> // route for mall page
            <Route path="/detail/:id" element={<Detail />} /> // route for
            detail page
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
