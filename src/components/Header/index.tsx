import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
            <Link className={styles.link} href={props.link1Href ?? ''} passHref>
              {props.link1Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link2Href ?? ''} passHref>
              {props.link2Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link3Href ?? ''} passHref>
              {props.link3Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link4Href ?? ''} passHref>
              {props.link4Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link5Href ?? ''} passHref>
              {props.link5Name}
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleMobileMenu} className={styles.mobileMenuIcon}>
        <HiMenu size={30} color="#000" />
      </button>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.active : ''
        }`}
      >
        <div className={styles.mobileMenuHeader}>
          <Link href="/">
            <Image
              src="/images/Apex 10 anos - Branco.png"
              alt="Logo"
              width={150}
              height={40.2}
              className={styles.mobileMenuLogo}
            />
          </Link>
          <div onClick={toggleMobileMenu} className={styles.closeBtn}>
            <AiOutlineClose size={30} color="#fff" />
          </div>
        </div>
        <ul className={styles.mobileMenuLinksContainer}>
          <li>
            <Link className={styles.link} href={props.link1Href ?? ''} passHref>
              {props.link1Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link2Href ?? ''} passHref>
              {props.link2Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link3Href ?? ''} passHref>
              {props.link3Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link4Href ?? ''} passHref>
              {props.link4Name}
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={props.link5Href ?? ''} passHref>
              {props.link5Name}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
