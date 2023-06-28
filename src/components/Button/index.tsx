import styles from './styles.module.css'

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
        <a href={heroButtonHref} className={styles.heroButtonText}>
          {heroButtonText}
        </a>
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
