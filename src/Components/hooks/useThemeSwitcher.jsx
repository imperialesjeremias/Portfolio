import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    // estado para el thema del local storage
    const [theme, setTheme] = useState(localStorage.theme);

    // condicional para activar el thema
    const activeTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        // seleccionar el root del html
        const root = window.document.documentElement;

        // remmovemos el tema anterior
        root.classList.remove(activeTheme);
        // agregamos el nuevo tema
        root.classList.add(theme);
        // guardamos el tema en el local storage
        localStorage.setItem('theme', theme);
    }, [theme, activeTheme]);

    return [activeTheme, setTheme];
}

export default useThemeSwitcher;