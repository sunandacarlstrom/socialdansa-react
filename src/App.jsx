import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./assets/styles/App.css"; 
import "./assets/styles/Colors.css"; 

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/shared/Navbar";
import DancebandPage from "./components/Pages/Danceband/DancebandPage";
import AboutPage from "./components/Pages/About/AboutPage";
import ContactPage from "./components/UI/Contact/Contact";

const App = () => {
return (
    <Router>
    <Navbar />
    <article className="page">
        <section>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/danceband" element={<DancebandPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </section>
    </article>
    </Router>
);
}

export default App; 