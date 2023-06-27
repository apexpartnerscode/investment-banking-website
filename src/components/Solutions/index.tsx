import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Solutions() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <h2 className={styles.title}>
          Soluções completas para sócios e empresas
        </h2>
        <Link href="/contact" className={styles.link}>
          Saiba mais
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className={styles.solutions}>
        <div className={`${styles.solutionBox} ${styles.fusoes}`}>
          <p className={styles.whiteText}>M&A | Fusões & Aquisições</p>
        </div>
        <div className={`${styles.solutionBox} ${styles.captacao}`}>
          <p className={styles.whiteText}>Captação de Recursos</p>
        </div>
        <div className={`${styles.solutionBox} ${styles.mercado}`}>
          <p className={styles.whiteText}>Mercado de Capitais</p>
        </div>
        <div className={`${styles.solutionBox} ${styles.divida}`}>
          <p className={styles.blueText}>Reestruturação de Dívida</p>
        </div>
        <div className={`${styles.solutionBox} ${styles.avaliacao}`}>
          <p className={styles.blueText}>Avaliação Econômica (valuation)</p>
        </div>
      </div>
    </div>
  )
}
