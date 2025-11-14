import { useState } from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
    const navigate = useNavigate();


    return (
        <>
            <div style={{
                display: "flex",
                gap: "20px",          // ruimte tussen knoppen
                padding: "20px",      // ruimte boven/omheen
                justifyContent: "flex-start", // links uitlijnen
            }}>
                <button onClick={() => navigate("/")}>
                    Home
                </button>
                <button onClick={() => navigate("/")}>
                    Over mij
                </button>
                <button onClick={() => navigate("/")}>
                    Projecten
                </button>
                <button onClick={() => document.getElementById("contact").scrollIntoView({behavior: "smooth"})}>
                    Contact
                </button>
            </div>

            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <p>

            </p>
            <p>

            </p>
            <p></p>

            <div id="contact">
                <h2>Contact sectie</h2>
            </div>
        </>
    )
}

export default App
