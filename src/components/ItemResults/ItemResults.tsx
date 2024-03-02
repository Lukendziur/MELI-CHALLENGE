// Internal
import { Fragment } from 'react'

import { IProductsBySearchResponseAdapted } from '@/types/productsBySearch'

import Divider from '../Divider/Divider'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

import ItemDetail from './ItemDetail/ItemDetail'
// Styles
import styles from './ItemResults.module.scss'

const ItemResults = ({ products }: IItemResults) => {
  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb arrayPath={products?.categories} />
      {/* ITEMS RESULTS: SECTION HAS AN ID FOR TEST PURPOSES */}
      <section className={styles.itemsResultContainer} id='items-section'>
        {products?.items?.map((item, index) => (
          <Fragment key={item.id}>
            <ItemDetail
              city={item.city}
              free_shipping={item.free_shipping}
              id={item.id}
              key={item.id}
              picture={item.picture}
              price={item.price}
              title={item.title}
            />
            {/* Don't show divider after last item */}
            {index !== products?.items?.length - 1 && <Divider />}
          </Fragment>
        ))}
      </section>
    </>
  )
}

export default ItemResults

interface IItemResults {
  products?: IProductsBySearchResponseAdapted
}
