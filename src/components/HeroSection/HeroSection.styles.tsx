'use client'

import styled from "styled-components";

export const SheroSection = styled.main`
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template: auto / repeat(3, 1fr);
`;

export const Saside = styled.aside`
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: pink;
`;

export const Sform = styled.form`
    grid-area: 1 / 2 / 3 / 4;
    display: grid;
    grid-template: 8fr 2fr / repeat(2, 1fr);
    height: 100%;
    width: 100%;
    background-color: #5d4d88;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 7em;
        width: 100%;
        height: 100%;
        background-color: green;
        grid-area: 2 / 1 / 3 / 3;
        border: none;
    }
`;

export const ScontainerData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #ddd19c;
    padding: 30px;

    div{
        width: 100%;    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`;
