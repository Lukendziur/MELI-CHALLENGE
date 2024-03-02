import React from 'react'
import Link from 'next/link'

import { ROUTES } from '@/constants/constants'

import styles from './NoResults.module.scss'

const NoResults = ({ title, description, action = false }: INoResults) => {
  return (
    <section className={styles.noResultsContainer}>
      <h1>{title}</h1>
      <p>{!action && description}</p>
      {action && <Link href={ROUTES.BASE}>Volver atrás</Link>}
    </section>
  )
}

export default NoResults

interface INoResults {
  title: string
  description: string
  action?: boolean
}
