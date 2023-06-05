import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Designs for your product
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together  the teams from the
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
