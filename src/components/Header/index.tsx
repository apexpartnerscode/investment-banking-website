import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

interface HeaderProps {
  link1Name: string
  link1Href: string
  link2Name: string
  link2Href: string
  link3Name: string
  link3Href: string
  link4Name: string
  link4Href: string
  link5Name: string
  link5Href: string
  logoImg: any
}

export default function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={props.logoImg}
          alt="Logo"
          width={80}
          height={28}
          className={styles.logo}
        />
      </Link>
      <nav>
        <ul className={styles.linksContainer}>
          <li>
            <Link className={styles.link} href={props.link1Href ?? ''}>
              {props.link1Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link2Href ?? ''}>
              {props.link2Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link3Href ?? ''}>
              {props.link3Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link4Href ?? ''}>
              {props.link4Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link5Href ?? ''}>
              {props.link5Name}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
