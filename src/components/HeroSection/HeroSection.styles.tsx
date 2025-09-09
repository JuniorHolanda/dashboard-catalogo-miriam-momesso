'use client'

import styled from "styled-components";

export const SheroSection = styled.main`
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template: auto / repeat(3, 1fr);
    background-color: ${({ theme }) => theme.colors.background1};
`;

export const Saside = styled.aside`
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const Sform = styled.form`
    grid-area: 1 / 2 / 3 / 4;
    display: grid;
    grid-template: 8fr 2fr / repeat(2, 1fr);
    height: 100%;
    width: 100%;
`;
export const Sbutton = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: 2 / 1 / 3 / 3;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            font-weight: 900;
            width: 100%;
            cursor: pointer;
            font-size: 7em;
            width: 100%;
            height: 100%;
            background-color: ${({theme}) => theme.colors.third};
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
    padding: 10px;
    gap: 30px;
`;

export const ScontainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 10%;
    width: 100%;
    padding: 10px;
`;


export const ScontainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90%;
    gap: 10px;
`;

export const Slabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    height: 90%;
    font-weight: 800;

    span{
        padding-left: 10px;
    }

    textarea{
        resize: none;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: none;
        padding: 10px;
    }
`;


