import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Hero from "./components/hero";
import Products from "./components/products";
import {pizzaData, sweetData} from "./components/products/data";
import Feature from "./components/feature";
import Footer from "./components/footer";

function App() {

    return(
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <GlobalStyle />
                        <Hero />
                        <Products heading="Choose your favorite" data={pizzaData} />
                        <Feature />
                        <Products heading="Sweet treats for you" data={sweetData} />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;