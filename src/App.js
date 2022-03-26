import React from 'react'
import {ThemeProvider} from 'styled-components'
import AboutUs from './pages/AboutUs'
import { GlobalStyle } from './styles'
import useDarkMode from './components/aboutus/useDarkMode'
import Header from './components/aboutus/Header'
import Footer from './components/aboutus/Footer'


const App = () => {
  const [theme, themeToggler, modeSelector] = useDarkMode();
  return (
    <ThemeProvider theme={modeSelector}>
      <GlobalStyle/>
      <Header  activeTheme={theme} toggleTheme={themeToggler} />
      <AboutUs  activeTheme={theme} toggleTheme={themeToggler}/>
      <Footer activeTheme={theme} toggleTheme={themeToggler}/>
    </ThemeProvider>
  )
}

export default App