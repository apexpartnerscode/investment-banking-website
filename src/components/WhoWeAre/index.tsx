import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

interface WhoWeAreProps {
  image: string
}

export default function WhoWeAre({ image }: WhoWeAreProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.texts}>
        <p className={styles.leadText}>Quem somos</p>
        <h2 className={styles.title}>
          Com atuação nacional e experiência em diversos setores, entregamos
          soluções de M&A e mercado de capitais de alto nível, customizadas às
          necessidades e contexto de nossos clientes.
        </h2>
        <p className={styles.description}>
          Nossa abordagem combina excelência técnica, experiência negocial,
          discrição, independência e agilidade.
        </p>
        <p className={styles.description}>
          Sabemos que cada transação é única. Por isso, nossa vasta experiência
          em M&A nos permite oferecer soluções personalizadas e 100% alinhadas
          com os interesses de nossos clientes.
        </p>
        <Link className={styles.contactLink} href="">
          Fale com nosso time
          <Image
            src="/icons/arrow-right.svg"
            alt="Ícone de seta para direita"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className={styles.image}>
        <Image
          src={image}
          className={styles.apexDoor}
          alt="apex door"
          width={460}
          height={328}
        />
      </div>
    </div>
  )
}
