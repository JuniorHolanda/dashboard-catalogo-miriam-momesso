"use client";

import styled from "styled-components";


export const Slabel = styled.label`
  top: calc(100% + 10px);
  left: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 800;
  gap: 10px;
  width: 100%;
  height: fit-content;
  background-color: transparent;

  span {
    padding-left: 10px;
  }
  

  input {
    position: absolute;
    appearance: none; /* Remove estilo nativo */
    -webkit-appearance: none; /* Necessário para Safari */
    -moz-appearance: none;
    opacity: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border: none;
    border-radius: 30px;
    padding: 10px;
  }
`;
