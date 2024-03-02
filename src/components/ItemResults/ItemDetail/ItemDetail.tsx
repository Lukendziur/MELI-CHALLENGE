/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import type { IItems } from '@/types/productsBySearch'
import { ROUTES } from '@/constants/constants'
import Currency from '@/components/Currency/Currency'

import FreeShippingImg from './../../../assets/free_shipping.png'
import styles from './ItemDetail.module.scss'

const ItemDetail = ({ price, id, title, picture, free_shipping, city }: IItems) => {
  return (
    <Link href={`${ROUTES.ITEMS}/${id}`}>
      <article className={styles.mainInfo}>
        <div className={styles.articleContainer}>
          <figure>
            <img alt={id} className={styles.productImg} src={picture} />
          </figure>
          <div className={styles.infoContainer}>
            <div className={styles.priceIcon}>
              <Currency amount={price.amount} decimals={price.decimals} tag='h1' />
              {free_shipping && (
                <Image alt='Free Shipping Icon' height={20} src={FreeShippingImg} width={20} />
              )}
            </div>
            <h2>{title}</h2>
          </div>
        </div>
        <p className={styles.location}>{city}</p>
      </article>
    </Link>
  )
}

export default ItemDetail
