'use client'

import styled from "styled-components";

export const SheroSection = styled.main`
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template: auto / repeat(3, 1fr);
    background-color: ${({ theme }) => theme.colors.background1};
`;

// ------------------------------aside------------------------

export const Saside = styled.aside`
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const ScontainerBtn = styled.div`
    grid-area: 2 / 1 / 3 /3;
    display: flex;
    border: green;
`

