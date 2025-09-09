'use client'

import styled from "styled-components"

export const SformGallery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({theme}) => theme.spacing.medium};
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
`

export const ScardImg = styled.div`
    display: grid;
    grid-template: 1fr 8fr 1fr / 2fr 1fr;
    width: 80%;
    height: 90%;
    padding: ${({theme}) => theme.spacing.small};
    gap: ${({theme}) => theme.spacing.small};
    max-height: 200px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.spacing.medium};
`

export const Sheader = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: 1 / 1 / 2 / 4;
    width: 100%;
    height: 100%;
    font-size:clamp(0.7px, 2em, 3vw);

    button{
        padding: ${({theme}) => theme.spacing.small};
        border-radius: ${({theme}) => theme.spacing.small};
        background-color: ${({theme}) => theme.colors.background3};
        border: none;
        color: ${({theme}) => theme.colors.text2};
    }
`


export const Sinfo = styled.label`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.medium};
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
    height: 100%;
    
    textarea{
        border-radius: ${({theme}) => theme.spacing.medium};
        border: none;
        width: 100%;
        height: 100%;
        resize:none;
    }
`


export const ScontainerImg = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 2 / 3 /3;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`


export const Sinput = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 80%;
    border-radius: 30px;
    background-color: ${({theme}) => theme.colors.third};
    border: solid turquoise;
    
    input {
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
    }
`


