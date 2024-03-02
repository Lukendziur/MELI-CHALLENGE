import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/constants/constants'

import LogoImg from '../../assets/Logo_ML.png'
import SearchForm from '../SearchForm/SearchForm'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <section className={styles.header}>
        <Link href={ROUTES.BASE}>
          <Image alt='logo' height={35} src={LogoImg} width={50} />
        </Link>
        <SearchForm />
      </section>
    </header>
  )
}

export default Header
