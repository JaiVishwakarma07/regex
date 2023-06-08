"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {

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
    //        se);
    //     }
    //     getData();
    // }, [])

    //using swr (better option)
    const router = useRouter()
    const session = useSession();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    console.log(data)

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const image = e.target[2].value
        const content = e.target[3].value

        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    image,
                    content,
                    username: session.data.user.name,
                })
            })
            //by mutate we dont have to refresh the page after adding new post 
            mutate()
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            })
            mutate()
        } catch (error) {
            console.log(error)
        }
    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading ? "Loading" : data?.map((post) => (
                        <div className={styles.post} key={post._id}>
                            <div className={styles.imgContainer}>
                                <Image src={post.image} width={220} height={120} alt="" />
                            </div>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
                        </div>
                    ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1>Add New Post</h1>
                    <input type="text" placeholder="Title" className={styles.input} />
                    <input type="text" placeholder="desc" className={styles.input} />
                    <input type="text" placeholder="image" className={styles.input} />
                    <textarea placeholder="Content" className={styles.textArea} cols="30" rows="10"></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        )
    }
}

export default Dashboard