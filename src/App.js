import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/List"
import Kolas from "./pages/Kolas"
import Kupale from "./pages/Kupale"
import Ryhor from "./pages/Ryhor"
import Dunin from "./pages/Dunin"
import Zuenok from "./pages/Zuenok"

export default function App() {
    return (
        <div className="App">
            <Suspense fallback={null}>
                <Route exact path="/" component={Home} />
                <Route exact path="/List" component={List} />
                <Route exact path="/Kolas" component={Kolas} />
                <Route exact path="/Kupale" component={Kupale} />
                <Route exact path="/Ryhor" component={Ryhor} />
                <Route exact path="/Dunin" component={Dunin} />
                <Route exact path="/Zuenok" component={Zuenok} />
            </Suspense>
        </div>
    );
}