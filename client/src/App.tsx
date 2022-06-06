import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Patient from './pages/Patient';
import Patients from './pages/Patients';
import Salle from './pages/Salle';
import Rdvs from './pages/Rdvs';
import Layout from './components/Layout';
import Acceuil from './pages/Acceuil';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route element={<Layout />}>
                    <Route path="/Acceuil" element={<Acceuil />} />
                    <Route path="/Patient/:id" element={<Patient />} />
                    <Route path="/Patients" element={<Patients />} />
                    <Route path="/Rendez-vous" element={<Rdvs />} />
                    <Route path="/Salle" element={<Salle />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
