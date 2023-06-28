import Link from 'next/link'
import styles from './styles.module.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

interface ButtonProps {
  heroButtonText: string
  heroButtonHref: string
  linkOrButton?: 'link' | 'button'
  onClick?: (e: any) => void
}

export default function Button({
  heroButtonText,
  heroButtonHref = '',
  linkOrButton = 'link',
  onClick,
}: ButtonProps) {
  return (
    <div className={manrope.className}>
      {linkOrButton === 'link' ? (
        <Link href={heroButtonHref} className={styles.heroButtonText}>
          {heroButtonText}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type="submit"
          className={styles.heroButtonText}
        >
          {heroButtonText}
        </button>
      )}
    </div>
  )
}
