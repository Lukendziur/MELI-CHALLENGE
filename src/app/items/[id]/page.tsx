import React from 'react'
import { Metadata } from 'next'

import { getProductByIdAdapter } from '@/adapters/getProductById'
import NoResults from '@/components/NoResults/NoResults'
import ProductDetail from '@/components/ProductDetail/ProductDetail'

/**
 * This function generates dynamic metadata based on the item selected
 * SEO purposes
 * @param param: searchParam
 * @returns
 */
export const generateMetadata = async ({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> => {
  const response = await getProductByIdAdapter({
    id: params.id,
  })

  return {
    title: !response.hasError && response.data.item.title,
    description: !response.hasError && response.data.item.description,
    // openGraph: {
    // !: This url doesn't work, we need the production url base. It's commented to avoid warnings
    // !: Here I only want to show the way to insert the img url to be share on social media
    // images: [`http://localhost:3000/${response.data.picture}`],
    // },
  }
}

export const page = async ({ params: { id } }: { params: { id: string } }) => {
  // ? We call the adapter. If service is ok, it will return the data
  // ? if service has error, it will return an error object
  const productResponse = await getProductByIdAdapter({
    id: id,
  })

  // ? Also, if the user accesses via url to a product that does not exist, a message will be rendered.
  const hasError = productResponse.hasError

  return hasError ? (
    <NoResults action description='Volver atrás' title='Parece que esta página no existe' />
  ) : (
    <ProductDetail product={productResponse.data.item} />
  )
}

export default page
