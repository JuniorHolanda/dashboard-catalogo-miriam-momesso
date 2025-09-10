"use client";

import styled from "styled-components";

export const Sbutton = styled.button`
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
  background-color: ${({ theme }) => theme.colors.third};
`;
