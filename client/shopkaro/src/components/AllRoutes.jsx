import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Kids from "../pages/Kids";
import Jewelery from "../pages/Jewelery";
import Footwear from "../pages/Footwear";
import Electronics from "../pages/Electronics";
import HomeAndKitchen from "../pages/HomeAndKitchen";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/footwears" element={<Footwear />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/homeandkitchens" element={<HomeAndKitchen />} />
    </Routes>
  );
}
