import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Details() {
    const router = useRouter()
    const { country } = router.query
    useEffect(() => {
        router.push('/details?country=' + country)
    }, [])
    return (
        <>
            <Head>
                <title>{country}</title>
                <meta name="description" content="NextJS app that show details about countries with rest countries API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}
