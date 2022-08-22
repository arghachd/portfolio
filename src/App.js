import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AboutPage from './components/AboutPage'
import Main from './components/Main'
import MySkillsPage from './components/MySkillsPage'
import { darkTheme, lightTheme } from './components/Themes'
import TimelinePage from './components/TimelinePage'
import WorkPage from './components/WorkPage'
import GlobalStyle from './globalStyles'

function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/timeline' component={TimelinePage} />
            <Route exact path='/work' component={WorkPage} />
            <Route exact path='/skills' component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
