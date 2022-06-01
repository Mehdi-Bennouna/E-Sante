import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Auth from './pages/Auth';
import Rdvs from './pages/Rdvs';
import Salle from './pages/Salle';
import Patients from './pages/Patients';
import Patient from './pages/Patient';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/Acceuil" element={<Acceuil />} />
                <Route path="/Patients" element={<Patients />} />
                <Route path="/Patients/:userId" element={<Patient />} />
                <Route path="/Rendez-vous" element={<Rdvs />} />
                <Route path="/Salle" element={<Salle />} />
            </Routes>
        </Router>
    );
}

export default App;
