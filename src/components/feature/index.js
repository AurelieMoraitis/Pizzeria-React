import React from 'react';
import {
    FeatureContainer,
    FeatureButton
} from "./FeatureStyle";

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped</p>
            <FeatureButton>Order Now</FeatureButton>

        </FeatureContainer>
    )
}

export default Feature
