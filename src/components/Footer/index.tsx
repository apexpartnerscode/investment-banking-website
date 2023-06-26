import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

interface linksArray {
  name: string
  href: string
}

interface socialNetworksLinks {
  Instagram: string
  LinkedIn: string
}

interface FooterProps {
  apexLogo: string
  siteMapLinks: string[]
  locationsLinks: string[]
  socialNetworksLinks: socialNetworksLinks[]
  phoneNumber: string
  contactEmail: string
  ouvidoriaEmail: string
  copyWriteYear: string
}

function formatNamesAndLinks(links: string[]) {
  if (links.length < 1) return [] as linksArray[]
  const linksArray: linksArray[] = []
  Object.values(links[0]).forEach((value, index, array) => {
    if (index % 2 === 0) {
      linksArray.push({
        name: value,
        href: array[index + 1],
      })
    }
  })
  return linksArray
}

export default function Footer({
  apexLogo,
  contactEmail,
  copyWriteYear,
  locationsLinks = [],
  ouvidoriaEmail,
  phoneNumber,
  siteMapLinks = [],
  socialNetworksLinks = [],
}: FooterProps) {
  const formattedSiteMapLinks = formatNamesAndLinks(siteMapLinks)
  const formattedLocationsLinks = formatNamesAndLinks(locationsLinks)
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <Image src={apexLogo} alt="Apex logo" width={250} height={67} />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.siteMap}>
            <h4 className={styles.footerSubTitle}>Mapa do site</h4>
            <div className={styles.linksList}>
              {formattedSiteMapLinks.map((link, index) => (
                <Link key={index} className={styles.link} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {formattedLocationsLinks.length > 0 && (
            <div className={styles.locations}>
              <h4 className={styles.footerSubTitle}>Localizações</h4>
              <div className={styles.linksList}>
                {formattedLocationsLinks.map((link, index) => (
                  <Link key={index} className={styles.link} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className={styles.social}>
            <h4 className={styles.footerSubTitle}>Redes Sociais</h4>
            <div className={styles.linksList} style={{ flexDirection: 'row' }}>
              <a
                href={socialNetworksLinks[0].Instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram size={40} color="#fff" />
              </a>
              <a
                href={socialNetworksLinks[0].LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin size={40} color="#fff" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.contacts}>
          <div>
            <h5 className={styles.footerSubTitle}>Fale Conosco</h5>
            <p className={styles.phone}>{phoneNumber}</p>
            <p className={styles.email}>{contactEmail}</p>
          </div>
          <div>
            <h5 className={styles.footerSubTitle}>Ouvidoria</h5>
            <p className={styles.email}>{ouvidoriaEmail}</p>
          </div>
        </div>
        <hr />
        <div className={styles.copyrights}>
          <p>{copyWriteYear} | Apex</p>
        </div>
      </div>
    </footer>
  )
}
