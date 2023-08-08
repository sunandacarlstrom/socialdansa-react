import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import "./assets/styles/Colors.css";

import Home from "./components/Pages/Home/Home";
import Navbar from "./components/shared/Navbar";
import SocialdancePage from "./components/Pages/Socialdance/SocialdancePage";
import DancebandPage from "./components/Pages/Danceband/DancebandPage";
import AboutPage from "./components/Pages/About/AboutPage";
import ContactPage from "./components/Pages/Contact/ContactPage";
import AdminPage from "./components/Pages/Admin/AdminPage";
import LoginPage from "./components/Pages/Account/LoginPage";
import RegisterPage from "./components/Pages/Account/RegisterPage";

const App = () => {
    return (
        <Router>
            <Navbar />
            <article className="page">
                <section>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/map" element={<MapPage />} /> */}
                        <Route path="/socialdance" element={<SocialdancePage />} />
                        <Route path="/danceband" element={<DancebandPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </section>
            </article>
        </Router>
    );
};

export default App;
