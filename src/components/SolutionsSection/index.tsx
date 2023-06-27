import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

interface SolutionSectionProps {
  title: string
  linkText: string
  linkHref: string
  backgroundImage: string
}

export default function SolutionSection({
  linkHref = '',
  linkText,
  title,
  backgroundImage,
}: SolutionSectionProps) {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <Link className={styles.link} href={linkHref}>
          {linkText}
          <Image
            src="/icons/arrow-right.svg"
            alt="Link Icon"
            className={styles.linkIcon}
            width={24}
            height={24}
          />
        </Link>
      </div>
    </section>
  )
}
