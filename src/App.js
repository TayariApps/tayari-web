import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./public/Home";
import Terms from "./public/Terms";
import Contact from "./public/Contact";
import Privacy from "./public/Privacy";
import Story from "./public/Story";
import Waitlist from "./public/Waitlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/story" element={<Story />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
