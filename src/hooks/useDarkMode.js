import React, { useState } from 'react';

const useDarkMode = (e) => {
    e.preventDefault();
    const [darkMode, setDarkMode] = useState(false);
    setDarkMode(!darkMode);
    return darkMode
}

export default useDarkMode;