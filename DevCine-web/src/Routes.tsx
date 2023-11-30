import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Devcine } from "./pages/Devcine";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devcine" element={<Devcine />} />
      <Route />
    </Routes>
  )
}