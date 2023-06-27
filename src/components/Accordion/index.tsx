import { useState } from 'react'
import styles from './styles.module.css'

type AccordionTopic = {
  title: string
  content: string
}
interface AccordionProps {
  topic: AccordionTopic[]
  topic1: AccordionTopic[]
  topic2: AccordionTopic[]
  topic3: AccordionTopic[]
  topic4: AccordionTopic[]
}

export default function Accordion({
  topic = [],
  topic1 = [],
  topic2 = [],
  topic3 = [],
  topic4 = [],
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }
  const topics = [...topic, ...topic1, ...topic2, ...topic3, ...topic4]
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {topics.map((item, index) => (
          <div key={index}>
            <div
              className={`${styles.titleWrapper} ${
                activeIndex === index ? styles.active : ''
              }`}
              onClick={() => handleItemClick(index)}
            >
              <h3 className={styles.title}>
                {item.title}
                {activeIndex === index ? (
                  <span className={styles.icon}>-</span>
                ) : (
                  <span className={styles.icon}>+</span>
                )}
              </h3>
            </div>
            {activeIndex === index && (
              <div
                className={`${styles.contentWrapper} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                <p className={styles.contentValue}>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
