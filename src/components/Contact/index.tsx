import { useState } from 'react'
import Button from '../Button'
import styles from './styles.module.css'
import InputMask from 'react-input-mask'
// import { LoadingOutlined } from '@ant-design/icons'
// import { Spin } from 'antd'

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
  description,
}: ContactProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  // const [loading, setLoading] = useState(false)

  function handleSubmit(event: any) {
    event.preventDefault()
    console.log(name, email, phone, message)
  }

  return (
    <section className={styles.formWrapper}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.contactMail}>
          <h4 className={styles.contactMailTile}>{contactPhoneTitle}</h4>
          <p className={styles.contactMailDescription}>
            {contactPhoneDescription}
          </p>
          <p className={styles.contactMailDescription}>{description}</p>
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
          <input
            required
            className={styles.input}
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onInvalid={(e: any) => {
              e.target.setCustomValidity('Por favor, preencha este campo.')
            }}
            onInput={(e: any) => {
              e.target.setCustomValidity('')
            }}
          />
        </label>
        <label className={styles.formLabel} htmlFor="email">
          E-mail
          <input
            required
            className={styles.input}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={(e: any) => {
              e.target.setCustomValidity('Por favor, informe um e-mail válido.')
            }}
            onInput={(e: any) => {
              e.target.setCustomValidity('')
            }}
          />
        </label>
        <label className={styles.formLabel} htmlFor="phone">
          Celular
          <InputMask
            mask={'(99) 99999-9999'}
            className={styles.input}
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}"
            onInvalid={(e: any) => {
              e.target.setCustomValidity(
                'Por favor, preencha este campo com um número de celular válido. Use o formato (99) 99999-9999.',
              )
            }}
            onInput={(e: any) => {
              e.target.setCustomValidity('')
            }}
            required
          />
        </label>
        <label className={styles.formLabel} htmlFor="message">
          Mensagem
          <textarea
            required
            rows={4}
            className={styles.input}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInvalid={(e: any) => {
              e.target.setCustomValidity(
                'Por favor, preencha este campo com sua mensagem.',
              )
            }}
            onInput={(e: any) => {
              e.target.setCustomValidity('')
            }}
          />
        </label>
        <div className={styles.sendButton}>
          <Button
            onClick={handleSubmit}
            linkOrButton="button"
            heroButtonHref="#"
            heroButtonText="Fale conosco"
          />
        </div>
      </form>
    </section>
  )
}
