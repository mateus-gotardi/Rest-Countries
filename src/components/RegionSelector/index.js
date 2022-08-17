import { SelectorStyles } from "./styles";
import { useContext, useState } from "react";
import AppContext from "../../../AppContext"
import { Colors } from "..";
import {AiOutlineDown} from 'react-icons/ai'

const RegionSelector = () => {
    const [dropMenu, setDropMenu] = useState('inactive')
    const value = useContext(AppContext)
    let { darkMode, region } = value.state
    let { setRegion } = value
    const handleSelect = (value) => {
        setRegion(value)
        setDropMenu('inactive')
    }
    const handleDropMenu = () => {
        dropMenu === 'active' ? setDropMenu('inactive') : setDropMenu('active')
    }
    return (
        <SelectorStyles darkMode={darkMode} Colors={Colors}>
            <button className="regionSelector" onClick={handleDropMenu}>{region}<AiOutlineDown/></button>
            <ul className={`${dropMenu}`}>
                <li onClick={()=>handleSelect('Filter By Region')} className='item'>Filter By Region</li>
                <li onClick={()=>handleSelect('Africa')} className='item'>Africa</li>
                <li onClick={()=>handleSelect('America')} className='item'>America</li>
                <li onClick={()=>handleSelect('Asia')} className='item' value="Asia">Asia</li>
                <li onClick={()=>handleSelect('Europe')} className='item' value="Europe">Europe</li>
                <li onClick={()=>handleSelect('Oceania')} className='item' value="Oceania">Oceania</li>
            </ul>

        </SelectorStyles>
    )
}
export default RegionSelector