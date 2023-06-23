import Link from 'next/link'
import styles from './styles.module.css'

interface HeroProps {
  heroImg: string
  heroTitle: string
  heroSubtitle: string
  heroButton?: string
}

export default function Hero({
  heroButton,
  heroImg,
  heroSubtitle,
  heroTitle,
}: HeroProps) {
  return (
    <>
      {heroImg ? (
        <div
          className={styles.heroImgBackGround}
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{heroTitle}</h1>
              <p className={styles.heroDescription}>{heroSubtitle}</p>
              {heroButton && (
                <Link href="" className={styles.heroButton}>
                  {heroButton}
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.heroBackGround}>
          <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{heroTitle}</h1>
              <h2 className={styles.subTitle}>{heroSubtitle}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
