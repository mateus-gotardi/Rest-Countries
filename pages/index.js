import Head from 'next/head'
import { ShowAllCountries, Header, Search, RegionSelector } from '../src/components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>REST Countries API</title>
        <meta name="description" content="NextJS app that show details about countries with rest countries API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Search/>
      <RegionSelector/>
      <ShowAllCountries />
    </div>
  )
}
