import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css"; 
import "./assets/styles/Colors.css"; 

import Home from "./components/Pages/Home/Home";
import DansbandPage from "./components/Pages/Dansband/DansbandPage";
import ContactPage from "./components/Pages/Contact/ContactPage";

const App = () => {
return (
    <Router>
    <article className="page">
        <section>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dansband" element={<DansbandPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </section>
    </article>
    </Router>
);
}

export default App; 