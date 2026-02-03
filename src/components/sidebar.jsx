import { useState } from "react";

export default function Sidebar() {
    const [mount, isMounted] = useState(false)

    function setTheme(isDark) {
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');

        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if (themeIcon && themeText) {
            themeIcon.textContent = isDark ? 'bedtime' : 'light_mode';
            themeText.textContent = isDark ? 'Dark Mode' : 'Light Mode';
        }
    }

    function toggleTheme() {
        const isDark = localStorage.getItem('theme') === 'dark';
        setTheme(!isDark);
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme ? savedTheme === 'dark' : true;
        setTheme(isDark);
    }

    return (
        <nav className="w-80 bg-red-500/50">
            <div className="sidebar-header">
                header
            </div>
            <div className="sidebar-content flex-1">
                content
            </div>
            <div className="sidebar-footer">
                footer
            </div>
        </nav>
    )
}