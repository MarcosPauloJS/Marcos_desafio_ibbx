import { Routes, Route } from "react-router-dom";
import { Ativo, Home, Sensor } from "./pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="home" index element={<Home />} />
      <Route path="ativo" element={<Home />} />
      <Route path="ativo/:id" element={<Ativo />} />
      <Route path="sensor" element={<Home />} />
      <Route path="sensor/:assetId/:sensorid" element={<Sensor />} />
    </Routes>
  );
}

export default Home;
