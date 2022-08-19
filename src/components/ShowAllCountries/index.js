import { ShowCountriesStyles } from "./styles";
import { useState, useEffect, useContext } from 'react'
import AppContext from "../../../AppContext"
import { SubTitle, Text } from '..'
import api from '../../services/api'
import { Colors } from "..";
import Link from "next/link";

export default function ShowAllCountries() {
    const value = useContext(AppContext)
    let { darkMode, region, search } = value.state
    const [allCountries, setAllCountries] = useState(false)

    async function getAllCountries() {
        const response = await api.get("/all")
        setAllCountries(response.data.sort())
        console.log(response.data)
    }
    useEffect(() => {
        getAllCountries()
    }, [])
    const CreateDiv = ({ country }) => {
        return (
            <Link href={`/details?country=${country.cca3}`}>
                <div key={country.ccn3} name={country.name.common} className='card'>
                    <div className='flag'>
                        <img src={country.flags.png} alt={country.name.common + ' flag'}></img>
                    </div>
                    <div className="details">
                        <SubTitle>
                            {country.name.common}
                        </SubTitle>
                        <Text><strong>Population:&nbsp;</strong>{country.population}</Text>
                        <Text><strong>Region:&nbsp;</strong>{country.region}</Text>
                        <Text><strong>Capital:&nbsp;</strong>{country.capital}</Text>
                    </div>
                </div>
            </Link>

        )
    }
    const matchSearch = (country) => {
        let countryName = country.name.common.toLowerCase()
        let searchLowerCase = search.toLowerCase()
        if (countryName.includes(searchLowerCase)) {
            return (true)
        } else { return (false) }
    }
    return (
        <ShowCountriesStyles Colors={Colors} darkMode={darkMode}>
            {allCountries && allCountries.map((country, key) => {
                switch (region) {
                    case 'Filter By Region':
                        if (search === '') {
                            return (
                                <CreateDiv country={country} key={key} />
                            )
                        } else if (matchSearch(country)) {
                            return (
                                <CreateDiv country={country} key={key} />
                            )
                        }

                        break;
                    case 'Africa':
                        if (country.region == 'Africa') {
                            if (search === '') {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            } else if (matchSearch(country)) {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            }
                        }
                        break;
                    case 'America':
                        if (country.region == 'Americas') {
                            if (search === '') {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            } else if (matchSearch(country)) {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            }
                        }
                        break;
                    case 'Asia':
                        if (country.region == 'Asia') {
                            if (search === '') {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            } else if (matchSearch(country)) {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            }
                        }
                        break;
                    case 'Europe':
                        if (country.region == 'Europe') {
                            if (search === '') {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            } else if (matchSearch(country)) {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            }
                        }
                        break;
                    case 'Oceania':
                        if (country.region == 'Oceania') {
                            if (search === '') {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            } else if (matchSearch(country)) {
                                return (
                                    <CreateDiv country={country} key={key} />
                                )
                            }
                        }
                        break;
                }

            })}
        </ShowCountriesStyles>
    )
}
