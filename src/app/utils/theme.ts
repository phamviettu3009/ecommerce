import { ThemeMode } from "../constants/theme";

export const convertTheme = (mode: ThemeMode): ThemeMode => {
    if (mode === ThemeMode.DEFAULT) {
        // return window?.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeMode.DARK : ThemeMode.LIGHT;
        return ThemeMode.LIGHT;
    }

    return mode;
};
