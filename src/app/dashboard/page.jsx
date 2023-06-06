"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {
    //using swr (better option)
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    //data fetching using use effect
    // const [data, setdata] = useState([])
    // const [err, setErr] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //             //this cache:"no-store" used when data is changing all the time and revalidate is needed all the time
    //             cache: "no-store"
    //         })
    //         if (!res.ok) {
    //             setErr(true)
    //         }
    //         const result = await res.json()
    //         setdata(result);
    //         setIsLoading(false);
    //     }
    //     getData();
    // }, [])

    console.log(data)

    return (
        <div className={styles.container}>Dashboard</div>
    )
}

export default Dashboard