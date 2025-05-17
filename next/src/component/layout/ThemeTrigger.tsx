"use client";
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import Button from '../ui/Button';

const ThemeTrigger = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='space-x-2'>
            <Button
                onClick={handleThemeChange}
            >
                {theme === 'light' ? (
                    <SunIcon />
                ) : (
                    <MoonIcon />
                )}
            </Button>
        </div>
    )
}

export default ThemeTrigger;
