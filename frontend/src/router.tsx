import { Routes, Route } from "react-router-dom";
import { Ativo, Home, Sensor } from "./pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="home" index element={<Home />} />
      <Route path="ativo" element={<Ativo />} />
      <Route path="sensor" element={<Sensor />} />
    </Routes>
  );
}

export default Home;
