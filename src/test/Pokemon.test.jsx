import React from "react";
import ReactDOM from "react-dom";
import Pokemon from "../functions/Pokemon";
import data from "../_data/pokemon.json";

it("<Pokemon/> should render correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pokemon {...data[0]}/>, div)
})