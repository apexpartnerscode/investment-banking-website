import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './styles.module.css'

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
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
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
      <div
        onClick={toggleMobileMenu}
        className={styles.mobileMenuIcon}
        aria-label="Mobile Menu"
      >
        {isMobileMenuOpen ? (
          <HiMenu size={30} color="#000" />
        ) : (
          <AiOutlineClose size={30} color="#fff" />
        )}
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.active : ''
        }`}
      >
        <ul className={styles.mobileMenuLinksContainer}>
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
      </div>
    </header>
  )
}
