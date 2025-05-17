"use client";
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

const ThemeTrigger = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='space-x-2'>
            <button
                onClick={handleThemeChange}
            >
                {theme === 'light' ? (
                    <SunIcon />
                ) : (
                    <MoonIcon />
                )}
            </button>
        </div>
    )
}

export default ThemeTrigger;
