import Link from 'next/link'
import styles from './styles.module.css'

interface ButtonProps {
  heroButtonText: string
  heroButtonHref: string
}

export default function Button({
  heroButtonText,
  heroButtonHref = '',
}: ButtonProps) {
  return (
    <Link href={heroButtonHref} className={styles.heroButtonText}>
      {heroButtonText}
    </Link>
  )
}
