import { useEffect } from 'react';

const useDarkMode = (key, value) => {
    useEffect(()=> {
        localStorage.setItem(key, value)
    }, [value])

}

export default useDarkMode;