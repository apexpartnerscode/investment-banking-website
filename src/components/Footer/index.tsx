import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <Image
            src="/images/Apex 10 anos - Branco.png"
            alt="Apex"
            width={250}
            height={67}
          />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.siteMap}>
            <h4 className={styles.footerSubTitle}>Mapa do site</h4>
            <div className={styles.linksList}>
              <Link className={styles.link} href="/">
                Home
              </Link>
              <Link className={styles.link} href="/">
                Sobre
              </Link>
              <Link className={styles.link} href="/">
                Serviços
              </Link>
              <Link className={styles.link} href="/">
                Carreiras
              </Link>
              <Link className={styles.link} href="/">
                Contato
              </Link>
            </div>
          </div>
          <div className={styles.locations}>
            <h4 className={styles.footerSubTitle}>Localizações</h4>
            <div className={styles.linksList}>
              <Link className={styles.link} href="/">
                Espirito Santo
              </Link>
              <Link className={styles.link} href="/">
                Mato Grosso
              </Link>
              <Link className={styles.link} href="/">
                Santa Catarina
              </Link>
              <Link className={styles.link} href="/">
                Paraná
              </Link>
            </div>
          </div>
          <div className={styles.social}>
            <h4 className={styles.footerSubTitle}>Redes Sociais</h4>
            <div className={styles.linksList}>
              <a href="" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.contacts}>
          <div>
            <h5 className={styles.footerSubTitle}>Fale Conosco</h5>
            <p className={styles.phone}>+55 27 3024-9999</p>
            <p className={styles.email}>faleconosco@apexpartners.com.br</p>
          </div>
          <div>
            <h5 className={styles.footerSubTitle}>Ouvidoria</h5>
            <p className={styles.email}>ouvidoria@apexpartners.com.br</p>
          </div>
        </div>
        <hr />
        <div className={styles.copyrights}>
          <p>2023 | Apex</p>
        </div>
      </div>
    </footer>
  )
}
