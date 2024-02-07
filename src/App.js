import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Course from "./pages/assignment/Course";
import Offers from "./components/offers/Offers";
import AllCourses from "./components/allCourses/AllCourses";
import Main from "./pages/newpage/Main";
import dayjs from "dayjs";



function App() {
  // console.log("printing month ", dayjs().format('YYYY-MM-DD HH:mm:ss'));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assignment" element={<Course/>} />
        <Route path="/assignment" element={<Offers/>} />
        <Route path="/assignment" element={<AllCourses/>} />
        <Route path="/newpage" element={<Main/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
