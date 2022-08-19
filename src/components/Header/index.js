import { HeaderStyles } from "./styles"
import { Text } from '../'
import { FaMoon } from 'react-icons/fa'
import { useContext } from "react"
import AppContext from "../../../AppContext"
import { Colors } from "..";
import Link from "next/link"

const Header = () => {
    const value = useContext(AppContext)
    let { darkMode } = value.state
    let { setDarkMode } = value
    const handleDarkMode = () => {
        if (darkMode) {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }
    return (
        <HeaderStyles Colors={Colors} darkMode={darkMode}>

            <Text>
                <Link href='/'>
                    <b>Where in the world?</b>
                </Link>
            </Text>


            <button onClick={handleDarkMode}><Text><FaMoon /><strong>&nbsp;Dark Mode</strong></Text></button>
        </HeaderStyles>
    )
}
export default Header