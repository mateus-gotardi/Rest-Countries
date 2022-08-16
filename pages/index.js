import Head from 'next/head'
import { useState, useEffect } from 'react'
import api from '../src/services/api'

export default function Home() {
  const [allCountries, setAllCountries] = useState()
  async function getAllCountries() {
    const response = await api.get("/all")
    console.log(response)
    setAllCountries(response.data)
  }
  useEffect(() => {
    getAllCountries()
  }, [])
  return (
    <div>
      <Head>
        <title>REST Countries API</title>
        <meta name="description" content="NextJS app that show details about countries with rest countries API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}
