import { DetailsStyles } from './styles'
import { Colors, Title, Text, SubTitle } from "..";
import Link from "next/link"
import api from '../../services/api'
import { useContext } from "react"
import AppContext from "../../../AppContext"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'

const CountryDetails = () => {
    const router = useRouter()
    const { country } = router.query
    const [countryDetails, setCountryDetails] = useState(false)
    const value = useContext(AppContext)
    let { darkMode } = value.state
    async function getCountryDetails() {
        const response = await api.get(`/alpha/${country}`)
        if (response.data.length === 1) {
            setCountryDetails(response.data)
        }
        console.log(response.data)
    }
    useEffect(() => {
        if (country !== undefined) {
            getCountryDetails()
        }
    }, [country])

    const ShowObjectInText = ({ obj }) => {
        let objKeys = Object.keys(countryDetails[0][obj])
        let objsList = []
        objKeys.map((i) => {
            if (obj === 'currencies') {
                objsList.push(countryDetails[0][obj][i].name)
            } else {
                objsList.push(countryDetails[0][obj][i])
            }
        })
        objsList = objsList.sort()
        return (
            <Text><b>{obj[0].toUpperCase()}{obj.slice(1)}:&nbsp;</b>{objsList.join(", ")}</Text>
        )
    }

    return (
        <DetailsStyles darkMode={darkMode} Colors={Colors}>
            <Link href='/'><p className='backButton'><BsArrowLeftShort />Back</p></Link>
            {countryDetails ?
                <div className='countryDetails'>
                    <div className="flag">
                        <img
                            src={countryDetails[0].flags.png}
                            alt={countryDetails[0].name.common + ' flag'}>
                        </img>
                    </div>
                    <div>
                        <Title className='CountryName'>{countryDetails[0].name.common}</Title>
                        <div className='details'>
                            <div className='first-details'>
                                {countryDetails[0].altSpellings[1]?
                                    <Text><b>Native Name:&nbsp;</b>{countryDetails[0].altSpellings[1]}</Text>:
                                    <Text><b>Native Name:&nbsp;</b>{countryDetails[0].name.common}</Text>
                                }
                                {countryDetails[0].population && <Text><b>Population:&nbsp;</b>{countryDetails[0].population}</Text>}
                                <Text><b>Region:&nbsp;</b>{countryDetails[0].region}</Text>
                                <Text><b>Sub Region:&nbsp;</b>{countryDetails[0].subregion}</Text>
                                <Text><b>Capital:&nbsp;</b>{countryDetails[0].capital}</Text>
                            </div>
                            <div className='moreDetails'>
                                <Text><b>Top Level Domain:&nbsp;</b>{countryDetails[0].tld}</Text>
                                {countryDetails[0].currencies && <ShowObjectInText obj='currencies' />}
                                {countryDetails[0].languages && <ShowObjectInText obj='languages' />}
                            </div>
                            <div className="borders">
                                <Text><b>Border Countries:</b></Text>
                                <div className="border-grid">
                                    {countryDetails[0].borders && countryDetails[0].borders.map((border) => {
                                        return (
                                            <Link key={border} href={'/getDetails?country=' + border}>
                                                <div  className="border">
                                                    <Text >{border}</Text>
                                                </div>
                                            </Link>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                </div> :
                <Title>Country Not Found</Title>}
        </DetailsStyles>
    )
}
export default CountryDetails
