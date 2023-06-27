import Button from '../Button'
import HighlightCard from '../HighlightCard'
import styles from './styles.module.css'

interface HighlightsSectionProps {
  card1Icon: string
  card1Text: string
  card2Icon: string
  card2Text: string
  card3Icon: string
  card3Text: string
  card4Icon: string
  card4Text: string
  card5Icon: string
  card5Text: string
  card6Icon: string
  card6Text: string
  buttonHref: string
}

export default function HighlightsSection(props: HighlightsSectionProps) {
  return (
    <div className={styles.highlightsSection}>
      <div className={styles.highlightsSectionContent}>
        <div className={styles.highlightsGrid}>
          <HighlightCard
            cardIcon={props.card1Icon}
            cardText={props.card1Text}
          />
          <HighlightCard
            cardIcon={props.card2Icon}
            cardText={props.card2Text}
          />
          <HighlightCard
            cardIcon={props.card3Icon}
            cardText={props.card3Text}
          />
          <HighlightCard
            cardIcon={props.card4Icon}
            cardText={props.card4Text}
          />
          <HighlightCard
            cardIcon={props.card5Icon}
            cardText={props.card5Text}
          />
          <HighlightCard
            cardIcon={props.card6Icon}
            cardText={props.card6Text}
          />
        </div>
        <div className={styles.button}>
          <Button
            heroButtonHref={props.buttonHref ?? ''}
            heroButtonText="Saiba mais"
          />
        </div>
      </div>
    </div>
  )
}
