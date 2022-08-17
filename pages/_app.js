import '../styles/globals.css'
import { useState } from 'react'
import AppContext from '../AppContext'
import { createGlobalStyle } from 'styled-components'
import { Colors } from '../src/components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? props.Colors.VeryDarkBlue : props.Colors.VeryLightGray)};
    color: ${props => (props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue)}
  }
`


function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)
  const [region, setRegion] = useState('Filter By Region')

  return (
    <AppContext.Provider
      value={{
        state: {
          darkMode: darkMode,
          region: region
        },
        setDarkMode: setDarkMode,
        setRegion: setRegion,
      }}>
        <GlobalStyle Colors={Colors} darkMode={darkMode}/>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
