import styles from './styles.module.css'
import Button from '../Button'

interface HeroProps {
  heroImg: string
  heroTitle: string
  heroSubtitle: string
  heroButtonText?: string
  heroButtonHref: string
}

export default function Hero({
  heroButtonText,
  heroButtonHref = '',
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
              {heroButtonText && (
                <Button
                  heroButtonText={heroButtonText}
                  heroButtonHref={heroButtonHref}
                />
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
