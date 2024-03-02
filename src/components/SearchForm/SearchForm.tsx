'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

import { ROUTES } from '@/constants/constants'

import SearchIcon from '../../assets/searchIcon.png'

import styles from './SearchForm.module.scss'

const SearchForm = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [value, setValue] = useState('')

  /**
   * handleSubmit: this function takes the searched value and redirects to /items?search=
   * @param e
   * @param value: searched value
   */
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
    e.preventDefault()

    // ? Verify if there is a value
    if (!value.trim()) {
      return
    }

    // ? Setting the searched value allows to handle the input value if the user reloads the page.
    localStorage.setItem('inputValue', value)

    router.push(`${ROUTES.ITEMS}?search=${value}`)
  }

  // ? Clean the input when the user back to home /
  // ? this feat is based on the current Meli page functionality
  useEffect(() => {
    const searchedItem = localStorage.getItem('inputValue') ?? ''

    setValue(searchedItem)
    pathname === ROUTES.BASE && setValue('')
  }, [pathname])

  return (
    <form className={styles.formContainer}>
      <input
        className={styles.inputClass}
        name='search'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Nunca dejes de buscar'
        type='text'
        value={value}
      />
      <button className={styles.submitButton} onClick={(e) => handleSubmit(e, value)} type='submit'>
        <Image alt='search-icon' height={20} src={SearchIcon} width={20} />
      </button>
    </form>
  )
}

export default SearchForm
