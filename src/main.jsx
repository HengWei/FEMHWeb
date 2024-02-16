import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Member from './Member'
import Navbar from './NavBar'
import Footer from './Footer'


import DiseaseIdx from './DiseaseIdx'
import Gout from './disease/Gout'


import Symptom from './Symptom'
import Lab from './Lab'


import Medication from './MedicationIdx'
import Nsaid from './Medication/Nsaid'
import Steroid from './Medication/Steroid'
import Biologicalagents from './Medication/Biologicalagents'
import Immunomodulator from './Medication/Immunomodulator'


import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/member" element={<Member />} />
                <Route path="/disease" element={<DiseaseIdx />} /> 
                <Route path="/symptom" element={<Symptom />} /> 
                <Route path="/lab" element={<Lab />} /> 
                <Route path="/medication" element={<Medication />} /> 
                <Route path="/Nsaid" element={<Nsaid />} />
                <Route path="/Steroid" element={<Steroid />} />
                <Route path="/Immunomodulator" element={<Immunomodulator />} />
                <Route path="/Biologicalagents" element={<Biologicalagents />} />
                <Route path="/Gout" element={<Gout />} />

            </Routes>
        </BrowserRouter>
        <Footer />
    </React.StrictMode>
)
