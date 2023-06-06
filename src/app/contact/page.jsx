import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lets keep in touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea placeholder="message" className={styles.textArea} id="" cols="30" rows="10"></textarea>
                    <Button url="#" text="send" />
                </form>
            </div>
        </div>
    )
}

export default Contact