import './App.css'
import foto from "./assets/images/foto.png"


function App() {
    const slowScrollTo = (id, duration = 1000) => {
        const target = document.getElementById(id);
        if (!target) return;

        const start = window.scrollY;
        const end = target.offsetTop;
        const distance = end - start;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const ease = progress < 0.5
            ? 2 * progress * progress
                : -1 + (4-2 * progress) * progress;

            window.scrollTo(0, start + distance * ease);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    };

    return (
        <div className="container">

            <nav className="navbar">
                <button onClick={() => slowScrollTo("hero", 1100)}>
                    Home
                </button>
                <button onClick={() => slowScrollTo("about", 1100)}>
                    Over mij
                </button>
                <button onClick={() => slowScrollTo("projects", 1100)}>
                    Projecten
                </button>
                <button onClick={() => slowScrollTo("contact", 1100)}>
                    Contact
                </button>
            </nav>

            <section className="hero">
                <div className="hero-text">
                    <h1 className="name">Sam<br />Bijkerk</h1>
                    <p className="subtitle">Creative developer</p>
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Hello world</h2>
                        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat."
                        </p>
                    </div>
                    <img src={foto} alt="foto van Sam" className="about-img"/>
                </div>
            </section>

            <section className="projects" id="projects">
                <div className="project project1"></div>
                <div className="project project2"></div>
                <div className="project project3"></div>
                <div className="project project4"></div>
            </section>

            <section className="contact" id="contact">
                <h2>Contact</h2>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                </p>

                <div className="socials">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </section>

        </div>
    );
}

export default App
