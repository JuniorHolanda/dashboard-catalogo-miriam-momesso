'use client'

import styled from "styled-components"

export const SSelect = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 30px;

    span{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 10px;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    ul {
        top: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        background-color: #585abd;

        li{
            border: solid red;
            display: flex;
            width: 100%;
            height: 100%;
        }
    }
`  