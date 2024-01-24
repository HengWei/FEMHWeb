import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Member from './Member'
import Navbar from './NavBar'
import Footer from './Footer'
import DiseaseIdx from './DiseaseIdx'

import { HashRouter, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
//import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/member" element={<Member />} />
                <Route path="/disease" element={<DiseaseIdx />} /> 
            </Routes>
        </HashRouter>
        <Footer />
    </React.StrictMode>
)
