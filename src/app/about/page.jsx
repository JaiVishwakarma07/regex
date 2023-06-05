import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/16534721/pexels-photo-16534721/free-photo-of-latte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={ }></h1>
                </div>
            </div>
            <div className={styles.textContainer}></div>
        </div>
    )
}

export default About