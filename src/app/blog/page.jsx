import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        //this cache:"no-store" used when data is changing all the time and revalidate is needed all the time
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Blog = async () => {
    const data = await getData()
    return (
        <div className={styles.mainconatainer}>
            {data.map((item) => (
                <Link href={`/blog/${item._id}`} key={item.id} className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.image}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>))}
        </div>
    )
}

export default Blog