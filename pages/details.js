import Head from 'next/head'
import { Header } from '../src/components'
import { useRouter } from 'next/router'
import {CountryDetails} from '../src/components'

export default function Details() {
    const router = useRouter()
    const { country } = router.query
    return (
        <div>
            <Head>
                <title>{country}</title>
                <meta name="description" content="NextJS app that show details about countries with rest countries API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <CountryDetails/>
        </div>
    )
}
