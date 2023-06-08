"use client"

import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {

    const session = useSession()
    const router = useRouter()

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value

        signIn("credentials", { email, password });
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>login</button>
                {/* {err && "Something went wrong!"} */}
            </form>
            <button className={styles.button + " " + styles.google} onClick={() => signIn("google")}>Login with google</button>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/register">
                Create new account
            </Link>
        </div>
    )
}

export default Login