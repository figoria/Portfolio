import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project from "./Projects/Project.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/project/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
