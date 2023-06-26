import Link from 'next/link'
import styles from './styles.module.css'

interface ButtonProps {
  heroButtonText: string
  heroButtonHref: string
  linkOrButton?: 'link' | 'button'
}

export default function Button({
  heroButtonText,
  heroButtonHref = '',
  linkOrButton = 'link',
}: ButtonProps) {
  return (
    <>
      {linkOrButton === 'link' ? (
        <Link href={heroButtonHref} className={styles.heroButtonText}>
          {heroButtonText}
        </Link>
      ) : (
        <button type="submit" className={styles.heroButtonText}>
          {heroButtonText}
        </button>
      )}
    </>
  )
}
