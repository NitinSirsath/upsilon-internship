import {useState} from 'react'
import {Light,Dark} from '../../styles'


const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light' )

    const themeToggler = () => {
        const toggleTheme = theme === 'dark' ? 'light' : 'dark' ;
        setTheme(toggleTheme)
        localStorage.setItem('theme', toggleTheme)
    }

    const modeSelector = theme === 'light' ? Light : Dark ;
    return [theme, themeToggler, modeSelector] 
}

export default useDarkMode