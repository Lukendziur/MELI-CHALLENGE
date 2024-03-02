/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { IProductByIdAdapted } from '@/types/productById'
import TextFormatter from '@/utils/functions'

import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Currency from '../Currency/Currency'
import FreeShippingImg from '../../assets/free_shipping.png'

import styles from './ProductDetail.module.scss'
import BackButton from './BackButton'

const ProductDetail = ({ product }: { product: IProductByIdAdapted }) => {
  return (
    <>
      <div className={styles.backContainer}>
        <BackButton />
        <Breadcrumb arrayPath={product.product_categorie} />
      </div>
      <article className={styles.sectionContainer}>
        <div className={styles.imgContainer}>
          <img alt={product.title} src={product.picture} />
        </div>
        <div className={styles.infoBox}>
          <div className={styles.priceTitle}>
            <div className={styles.soldCondition}>
              <p>
                {product.condition}{' '}
                {product.sold_quantity > 0 ? `- ${product.sold_quantity} vendidos` : null}
              </p>
              {product.free_shipping && (
                <div className={styles.freeShipping}>
                  <Image alt='Free Shipping Icon' height={20} src={FreeShippingImg} width={20} />
                  <p>¡Envío gratis!</p>
                </div>
              )}
            </div>
            <h1>{product.title}</h1>
          </div>
          <Currency amount={product.price.amount} decimals={product.price.decimals} tag='h2' />
          <button className={styles.buyButton}>Comprar</button>
        </div>
        <div className={styles.description}>
          <h3>Descripción del producto</h3>
          <span>{TextFormatter(product.description)}</span>
        </div>
      </article>
    </>
  )
}

export default ProductDetail
