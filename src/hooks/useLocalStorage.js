import { useState, useEffect } from 'react';
import useDarkMode from './useDarkMode';

const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue
    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useDarkMode(key, value);

    return [value, setValue]
}

export default useLocalStorage;