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
        <Route path="/" exact element={<Home />} />
        <Route path="/terms" exact element={<Terms />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/story" exact element={<Story />} />
        <Route path="/waitlist" exact element={<Waitlist />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
