"use client";

import { createTheme, ThemeProvider as MUIThemeProvider, PaletteMode, Theme } from "@mui/material";
import { Context, createContext, useState } from "react";
import { ThemeMode } from "../constants/theme";
import { convertTheme } from "../utils/theme";

export type ThemeContextType = {
    option: ThemeMode;
    theme: string;
    isDarkMode: boolean;
    changeTheme: (mode: ThemeMode) => void;
};

const ThemeContext: Context<ThemeContextType> = createContext<ThemeContextType>({
    option: ThemeMode.DEFAULT,
    theme: "light",
    isDarkMode: false,
    changeTheme: () => {},
});

type ThemeProviderPropsType = React.HTMLProps<Element>;

function ThemeProvider({ ...rest }: ThemeProviderPropsType): JSX.Element {
    const [option, setOption] = useState<ThemeMode>(ThemeMode.DEFAULT);
    const theme: ThemeMode = convertTheme(option as ThemeMode);

    const isDarkMode: boolean = theme === ThemeMode.DARK;

    const MUITheme: Theme = createTheme({
        palette: {
            mode: theme as PaletteMode,
            primary: {
                main: "#274ab3",
            },
            background: {
                paper: isDarkMode ? "#141b25" : "#f6f7f9",
                default: isDarkMode ? "#141b25" : "#f6f7f9",
            },
        },
        shape: {
            borderRadius: 8,
        },
    });

    const changeTheme = (mode: ThemeMode): void => {
        setOption(mode);
    };

    return (
        <MUIThemeProvider theme={MUITheme}>
            <ThemeContext.Provider value={{ option, theme, isDarkMode, changeTheme }}>
                {rest.children}
            </ThemeContext.Provider>
        </MUIThemeProvider>
    );
}

export { ThemeContext, ThemeProvider };
