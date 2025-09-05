'use client'

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyles";

type WrapperProps = {
    children: React.ReactNode;
}

export function WrapperThemeProvider({ children }: WrapperProps) {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
        
}