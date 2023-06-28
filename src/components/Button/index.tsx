import Link from 'next/link'
import styles from './styles.module.css'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

interface ButtonProps {
  heroButtonText: string
  heroButtonHref: string
  linkOrButton?: 'link' | 'button'
  onClick?: (e: any) => void
  loading?: boolean
}

export default function Button({
  heroButtonText,
  heroButtonHref = '',
  linkOrButton = 'link',
  onClick,
  loading = false,
}: ButtonProps) {
  return (
    <div>
      {linkOrButton === 'link' ? (
        <Link href={heroButtonHref} className={styles.heroButtonText}>
          {loading ? (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 24, paddingInline: '32px', color: '#fff' }}
                  spin
                />
              }
            />
          ) : (
            heroButtonText
          )}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type="submit"
          className={styles.heroButtonText}
        >
          {loading ? (
            <Spin
              indicator={
                <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
              }
            />
          ) : (
            heroButtonText
          )}
        </button>
      )}
    </div>
  )
}
