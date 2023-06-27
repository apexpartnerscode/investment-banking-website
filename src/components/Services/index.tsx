import Image from 'next/image'
import styles from './styles.module.css'

interface ServicesProps {
  imageRightSide?: boolean
  thereIsLine?: boolean
  imageUrl: string
  title: string
  description: string
  list: string[]
  hexBackgroundColor?: string
  linkName?: string
  linkUrl?: string
}

export default function Services({
  imageRightSide,
  thereIsLine,
  imageUrl,
  title,
  description,
  list,
  hexBackgroundColor,
  linkName,
  linkUrl,
}: ServicesProps) {
  const flexDirection = imageRightSide ? `row-reverse` : `row`
  console.log(list)
  return (
    <div style={{ backgroundColor: `${hexBackgroundColor || '#fff'}` }}>
      <div
        className={styles.wrapper}
        style={{ flexDirection: `${flexDirection}` }}
      >
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            className={styles.image}
            alt="service image"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.list}>
            {list &&
              Object.values(list[0]).map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
          </ul>
          {linkName && (
            <a
              className={styles.link}
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {linkName}
              <Image
                src="/images/arrow-right.svg"
                alt="arrow right"
                width={24}
                height={24}
              />
            </a>
          )}
        </div>
      </div>
      {thereIsLine && <div className={styles.line} />}
    </div>
  )
}
