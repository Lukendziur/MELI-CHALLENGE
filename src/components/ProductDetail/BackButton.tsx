'use client'

import { useRouter } from 'next/navigation'

// I'm only using the same stylesheet to avoid to create other in this case.
import styles from './ProductDetail.module.scss'

export default function BackButton() {
  const router = useRouter()

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      Volver |
    </button>
  )
}
