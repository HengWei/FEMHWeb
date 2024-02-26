import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Member from './Member'
import Navbar from './NavBar'
import Footer from './Footer'

import DiseaseIdx from './DiseaseIdx'
import Gout from './disease/Gout'
import RA from './disease/RA'
import AS from './disease/AS'
import Osteoarthritis from './disease/Osteoarthritis'
import SepticArthritis from './disease/Septic-arthritis'
import PsA from './disease/PsA'
import PalidromicHeumatism from './disease/Palidromic-heumatism'
import AultStill from './disease/Ault-Still'
import SLE from './disease/SLE'
import Sjogren from './disease/Sjogren'
import Scleroderma from './disease/Scleroderma'
import PolymyositisAndDermatomyositis from './disease/Polymyositis-and-dermatomyositis'
import MCTD from './disease/MCTD'
import APS from './disease/APS'
import Vasculitis from './disease/Vasculitis'
import Wegener from './disease/Wegener'
import Behcet1 from './disease/Behcet-1'
import Fibromyalgia from './disease/Fibromyalgia'
import MyofascialPain from './disease/Myofascial-pain'
import Osteoporosis from './disease/Osteoporosis'
import ErythemaNodosum from './disease/Erythema-nodosum'
import ADAPAH from './disease/ADAPAH'
import ILD from './disease/ILD'
import IC from './disease/IC'
import AH from './disease/AH'
import Polymyalgia from './disease/Polymyalgia'
import AllergicRhinitis from './disease/Allergic-rhinitis'
import Asthma from './disease/Asthma'
import DrugAllergy from './disease/Drug-allergy'
import StevenJohnsonSyndrome from './disease/Steven-Johnson-syndrome'
import Urticaria from './disease/Urticaria'



import Symptom from './Symptom'
import Lab from './Lab'
import Search from './Search'


import Medication from './MedicationIdx'
import Nsaid from './Medication/Nsaid'
import Steroid from './Medication/Steroid'
import Biologicalagents from './Medication/Biologicalagents'
import Immunomodulator from './Medication/Immunomodulator'
import Moleculetargetdrug from './Medication/Moleculetargetdrug'
import Goutmedicine from './Medication/Goutmedicine'
import MOsteoporosis from './Medication/M-Osteoporosis'
import Antiallergy from './Medication/Antiallergy'
import Musclerelaxant from './Medication/Musclerelaxant'
import {  HashRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <HashRouter>
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
                <Route path="/Moleculetargetdrug" element={<Moleculetargetdrug />} />
                <Route path="/Goutmedicine" element={<Goutmedicine />} />
                <Route path="/M-Osteoporosis" element={<MOsteoporosis />} />
                <Route path="/Antiallergy" element={<Antiallergy />} />
                <Route path="/Musclerelaxant" element={<Musclerelaxant />} />
                <Route path="/Gout" element={<Gout />} />
                <Route path="/RA" element={<RA />} />
                <Route path="/AS" element={<AS />} />
                <Route path="/Osteoarthritis" element={<Osteoarthritis />} />
                <Route path="/SepticArthritis" element={<SepticArthritis />} />
                <Route path="/PsA" element={<PsA />} />
                <Route path="/PalidromicHeumatism" element={<PalidromicHeumatism />} />
                <Route path="/AultStill" element={<AultStill />} />
                <Route path="/SLE" element={<SLE />} />
                <Route path="/Sjogren" element={<Sjogren />} />
                <Route path="/Scleroderma" element={<Scleroderma />} />
                <Route path="/PolymyositisAndDermatomyositis" element={<PolymyositisAndDermatomyositis />} />
                <Route path="/MCTD" element={<MCTD />} />
                <Route path="/APS" element={<APS />} />
                <Route path="/Vasculitis" element={<Vasculitis />} />
                <Route path="/Wegener" element={<Wegener />} />
                <Route path="/Behcet1" element={<Behcet1 />} />
                <Route path="/Fibromyalgia" element={<Fibromyalgia />} />
                <Route path="/MyofascialPain" element={<MyofascialPain />} />
                <Route path="/Osteoporosis" element={<Osteoporosis />} />
                <Route path="/ErythemaNodosum" element={<ErythemaNodosum />} />
                <Route path="/ADAPAH" element={<ADAPAH />} />
                <Route path="/ILD" element={<ILD />} />
                <Route path="/IC" element={<IC />} />
                <Route path="/AH" element={<AH />} />
                <Route path="/Polymyalgia" element={<Polymyalgia />} />
                <Route path="/AllergicRhinitis" element={<AllergicRhinitis />} />
                <Route path="/Asthma" element={<Asthma />} />
                <Route path="/DrugAllergy" element={<DrugAllergy />} />
                <Route path="/StevenJohnsonSyndrome" element={<StevenJohnsonSyndrome />} />             
                <Route path="/Urticaria" element={<Urticaria />} />             

                
                <Route path="/Search" element={<Search />} />
            </Routes>
        </HashRouter>
        <Footer />
    </React.StrictMode>
)
