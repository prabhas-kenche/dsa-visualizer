function ThemeToggle({darkMode, setDarkMode}) {
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <button onClick={toggleTheme}>
            {darkMode
            ? "☀️ Light"
            : "🌙 Dark"}
        </button>
    )
}

export default ThemeToggle