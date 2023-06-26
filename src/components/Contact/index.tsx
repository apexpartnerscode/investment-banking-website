import Button from '../Button'
import styles from './styles.module.css'
import InputMask from 'react-input-mask'

interface ContactProps {
  title: string
  description: string
  contactMailTitle: string
  contactMailDescription: string
  contactPhoneTitle: string
  contactPhoneDescription: string
}

export default function Contact({
  contactMailDescription,
  contactMailTitle,
  contactPhoneTitle,
  contactPhoneDescription,
  title,
}: ContactProps) {
  return (
    <section className={styles.formWrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.contactMail}>
          <h4 className={styles.contactMailTile}>{contactPhoneTitle}</h4>
          <p className={styles.contactMailDescription}>
            {contactPhoneDescription}
          </p>
        </div>
        <div className={styles.contactMail}>
          <h4 className={styles.contactMailTile}>{contactMailTitle}</h4>
          <p className={styles.contactMailDescription}>
            {contactMailDescription}
          </p>
        </div>
      </div>
      <form className={styles.formContainer}>
        <label className={styles.formLabel} htmlFor="name">
          Nome
          <input required className={styles.input} id="name" type="text" />
        </label>
        <label className={styles.formLabel} htmlFor="email">
          E-mail
          <input required className={styles.input} id="email" type="email" />
        </label>
        <label className={styles.formLabel} htmlFor="phone">
          Celular
          <InputMask
            mask={'(99) 99999-9999'}
            className={styles.input}
            id="phone"
            type="text"
            required
          />
        </label>
        <label className={styles.formLabel} htmlFor="message">
          Mensagem
          <textarea required rows={4} className={styles.input} id="message" />
        </label>
        <div className={styles.sendButton}>
          <Button
            linkOrButton="button"
            heroButtonHref="#"
            heroButtonText="Fale conosco"
          />
        </div>
      </form>
    </section>
  )
}
