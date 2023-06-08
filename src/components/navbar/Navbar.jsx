"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "about",
        url: "/about",
    },
    {
        id: 5,
        title: "contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "dashboard",
        url: "/dashboard",
    },
]

const Navbar = () => {
    const session = useSession()
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">Regex</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
                {session.status === "authenticated" &&
                    (< button className={styles.logout} onClick={signOut}>LogOut</button>)}
            </div>
        </div >
    )
}

export default Navbar