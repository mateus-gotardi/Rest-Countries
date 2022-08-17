import React from "react";
import { SearchStyle } from "./styles";
import {BiSearch} from 'react-icons/bi'
import { useContext } from "react"
import AppContext from "../../../AppContext"
import { Colors } from "..";

const Search = ()=>{
    const value = useContext(AppContext)
    let { darkMode } = value.state

    return(
        <SearchStyle darkMode={darkMode} Colors={Colors}>
            <BiSearch/><input type='text' placeholder="Search for a country..."></input>
        </SearchStyle>
    )
}
export default Search