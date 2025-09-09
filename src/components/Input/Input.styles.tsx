"use client";

import styled from "styled-components";

type SelectProps = {
  isSelect?: boolean;
};

export const Sfield = styled.label<SelectProps>`
  top: calc(100% + 10px);
  left: 0;
  position: ${({isSelect}) => (isSelect ? "relative" : "static")};
  display: flex;
  flex-direction: ${({ isSelect }) => (isSelect ? "row" : "column")};
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
    position: ${({isSelect}) => (isSelect ? "absolute" : "static")};
    appearance: none; /* Remove estilo nativo */
    -webkit-appearance: none; /* Necessário para Safari */
    -moz-appearance: none;
    opacity: ${({ isSelect }) => (isSelect ? "0" : "1")};
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
