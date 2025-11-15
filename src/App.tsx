import Welcome from "./Welcome";
import MovieInfo from "./MovieInfo";
import { JSX } from "react";

import "./App.css";
import "./Header.css";

function App(): JSX.Element {
return (
<div className="app-container">
    <header>
        <h1>Kerala Theatre Portal</h1>
    </header>
    <div className="welcome-section">
        <Welcome name="CDIPD Team" />
    </div>

        <MovieInfo title="Thenmavin kombath" language="Malayalam" rating={4.9} />

        <footer className="footer">
            © 2025 Kerala Theatre Portal | Created by Keerthi
        </footer>
</div>
);
}

export default App;