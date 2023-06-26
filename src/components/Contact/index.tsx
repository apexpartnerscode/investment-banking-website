import Button from '../Button'
import styles from './styles.module.css'

export default function Contact() {
  return (
    <section className={styles.formWrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>
          Dúvidas ou informações? Entre em contato com o nosso time
        </h3>
        <div className={styles.contactMail}>
          <h4 className={styles.contactMailTile}>Fale Conosco:</h4>
          <p className={styles.contactMailDescription}>
            +55 27 3024-9999 <br /> faleconosco@apexpartners.com.br
          </p>
        </div>
        <div className={styles.contactMail}>
          <h4 className={styles.contactMailTile}>Ouvidoria:</h4>
          <p className={styles.contactMailDescription}>
            ouvidoria@apexpartners.com.br
          </p>
        </div>
      </div>
      <form className={styles.formContainer}>
        <label className={styles.formLabel} htmlFor="name">
          Nome
          <input className={styles.input} id="name" type="text" />
        </label>
        <label className={styles.formLabel} htmlFor="email">
          E-mail
          <input className={styles.input} id="email" type="email" />
        </label>
        <label className={styles.formLabel} htmlFor="phone">
          Celular
          <input className={styles.input} id="phone" type="text" />
        </label>
        <label className={styles.formLabel} htmlFor="message">
          Mensagem
          <textarea rows={4} className={styles.input} id="message" />
        </label>
        <div className={styles.sendButton}>
          <Button heroButtonHref="#" heroButtonText="Fale conosco" />
        </div>
      </form>
    </section>
  )
}
