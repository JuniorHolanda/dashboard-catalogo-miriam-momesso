'use client';
import styled from "styled-components"

//-------------------------formulário-------------------------
export const Sform = styled.form`
    grid-area: 1 / 2 / 3 / 4;
    display: grid;
    grid-template: 8fr 2fr / repeat(2, 1fr);
    width: 100%;
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
    height: 100%;
    gap: 10px;
`;

export const Slabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    height: 100%;
    font-weight: 800;
    border: solid red;

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
