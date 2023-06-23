import Image from 'next/image'
import styles from './styles.module.css'

interface HighlightCardProps {
  cardIcon: string
  cardText: string
}

export default function HighlightCard({
  cardIcon,
  cardText,
}: HighlightCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardIcon}>
        <Image src={cardIcon} alt="Ícone" width={48} height={48} />
      </div>
      <div className={styles.cardTextWrapper}>
        <p className={styles.cardText}>{cardText}</p>
      </div>
    </div>
  )
}
