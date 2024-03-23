import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Languages from "./components/Languages";
import Examples from "./Examples";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Languages />
                <Examples />
            </main>
        </Fragment>
    );
}

export default App;
