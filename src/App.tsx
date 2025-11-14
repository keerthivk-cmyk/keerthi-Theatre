import Welcome from "./Welcome";
import MovieInfo from "./MovieInfo";
import { JSX } from "react";
function App(): JSX.Element {
return (
<div>
    <h1>Kerala Theatre Portal</h1>
    <Welcome name="CDIPD Team" />
        <MovieInfo title="Thenmavin kombath" language="Malayalam" rating={4.9} />
</div>
);
}

export default App;