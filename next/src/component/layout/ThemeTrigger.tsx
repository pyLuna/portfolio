"use client";
import { useThemeHook } from '@/hooks/theme';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import Button from '../ui/Button';

const ThemeTrigger = () => {
    const { theme, setTheme, mounted } = useThemeHook();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) {
        return null;
    }

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
