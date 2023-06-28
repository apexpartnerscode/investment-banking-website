import Link from 'next/link'
import styles from './styles.module.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

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
    <div>
      {linkOrButton === 'link' ? (
        <Link
          href={heroButtonHref}
          className={`${manrope.className} ${styles.heroButtonText}`}
        >
          {heroButtonText}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type="submit"
          className={`${manrope.className} ${styles.heroButtonText}`}
        >
          {heroButtonText}
        </button>
      )}
    </div>
  )
}
