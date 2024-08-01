import { Routes, Route } from "react-router-dom";
import { Ativo, Home, Sensor } from "./pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="home" index element={<Home />} />
      <Route path="ativo/:id" element={<Ativo />} />
      <Route path="sensor/:id" element={<Sensor />} />
    </Routes>
  );
}

export default Home;
