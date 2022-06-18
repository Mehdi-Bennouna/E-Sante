import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Patient from './pages/Patient';
import Patients from './pages/Patients';
import Salle from './pages/Salle';
import Rdvs from './pages/Rdvs';
import Layout from './components/Layout';
import Acceuil from './pages/Acceuil';
import Tests from './pages/Tests';

import { Provider } from "react-redux";
import store from "./app/store";
import Medecins from "./pages/Medecins";
import Assistants from "./pages/Assistants";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route element={<Layout />}>
                        <Route path="/Acceuil" element={<Acceuil />} />
                        <Route path="/Patients/:id" element={<Patient />} />
                        <Route path="/Patients" element={<Patients />} />
                        <Route path="/Rendez-vous" element={<Rdvs />} />
                        <Route path="/Salle" element={<Salle />} />
                        <Route path="/Tests" element={<Tests />} />
                        <Route path="/Medecins" element={<Medecins />} />
                        <Route path="/Assistants" element={<Assistants />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
