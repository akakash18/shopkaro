import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
}
