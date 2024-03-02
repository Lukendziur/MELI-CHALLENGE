import Link from 'next/link'
import React from 'react'

import { ROUTES } from '@/constants/constants'

import styles from './Error.module.scss'

const Error = () => {
  return (
    <section className={styles.errorContainer}>
      <h1>Error de servicio</h1>
      <Link className={styles.redirectLink} href={ROUTES.BASE}>
        Volver al inicio
      </Link>
    </section>
  )
}

export default Error
