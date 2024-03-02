import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { getProductBySearchAdapter } from '@/adapters/getProductBySearchAdapter'
import ItemResults from '@/components/ItemResults/ItemResults'
import NoResults from '@/components/NoResults/NoResults'

/**
 * This function generates dynamic metadata based on the search
 * SEO purposes
 * @param param: searchParam
 * @returns
 */
export const generateMetadata = async ({ searchParams }: IItemsPage): Promise<Metadata> => {
  return {
    title: `${searchParams.search.toUpperCase()} | Mercado Libre`,
    description: 'Resultados de tu búsqueda',
  }
}

const ItemsPage = async ({ searchParams }: IItemsPage) => {
  // ? We call the adapter. If service is ok, it will return the data
  // ? if service has error, it will return an error object
  const productResponse = await getProductBySearchAdapter({
    searchParams: searchParams?.search,
  })

  // ? Also, we handle if the service return noResults to show another text. Check <NoResults/> component.
  const noResults = productResponse.data && productResponse.data.items.length < 1

  // ? Only for UX purposes: If we get a error from the server the user will be redirected to /error page.
  if (productResponse.hasError) {
    return redirect('/error')
  }

  return noResults ? (
    <NoResults
      description='Intenta buscando otros artículos como: licuadoras, celulares, heladeras'
      title='Oh! No hay resultados para tu búsqueda'
    />
  ) : (
    <ItemResults products={productResponse.data} />
  )
}

export default ItemsPage

interface IItemsPage {
  searchParams: { search: string }
}
