import React from 'react'
import Image from 'next/image'

import { concatClassNames } from '@/utils/functions'

import RightArrow from '../../assets/chevron.svg'

import styles from './Breadcrumb.module.scss'

const Breadcrumb = ({ arrayPath = [] }: { arrayPath: string[] | undefined }) => {
  /**
   * This function takes an array of strings and concatenates an arrow to each value. The last string doesn't have arrow.
   * Also, the last string has another className with font-weight stronger
   * @returns tsx component
   */
  const generateBreadcrumb = () => {
    return arrayPath.map((element, index) => (
      <span
        className={concatClassNames(
          styles.breadcrumb,
          index === arrayPath.length - 1 && styles.lastBread,
        )}
        key={element}
      >
        {element}
        {index !== arrayPath.length - 1 && (
          <span className={styles.arrowContainer}>
            <Image alt='icon' className={styles.imgArrow} height={10} src={RightArrow} width={10} />
          </span>
        )}
      </span>
    ))
  }

  return <div className={styles.breadcrumbContainer}>{generateBreadcrumb()}</div>
}

export default Breadcrumb
