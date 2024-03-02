import { getProductsBySearchService } from '@/services/getProductBySearchService'
import { Adapter } from '@/types/globals'
import { IProductsBySearchResponseAdapted } from '@/types/productsBySearch'
import { returnBackServiceError } from '@/utils/functions'
import { AUTHOR } from '@/constants/constants'

import { currencyFormatter } from '../utils/functions'

export const getProductBySearchAdapter: Adapter<
  { searchParams: string },
  IProductsBySearchResponseAdapted
> = async ({ searchParams }) => {
  try {
    const productsResponse = await getProductsBySearchService(searchParams)

    // ? ABOUT CATEGORIES
    // To form the most visited categories I have two options:
    // 1) Get the categories from: productsResponse.filters[0].values[0].path_from_root
    //  (product's own categories)
    // 2) Get the categories from: productsResponse?.available_filters?.filter(
    //       (filterId) => filterId.id === 'category' (I consider that these are the categories related to the search).

    // Following the current design provided, if we search for "ipod", the categories should be obtained from the second option. But, there are many products that do not have categories, in that case, I have chosen to place the categories from option 1.

    // The product has categories in available_filters = I use visitedCategories
    // The product doesn't have categories in available_filters = I use categories

    // In this way, for design purposes, we will always have a breadcrumb.

    const categories =
      productsResponse.filters.length && productsResponse.filters[0].values
        ? productsResponse.filters[0].values[0].path_from_root.map(
            (category: { name: string }) => category.name,
          )
        : []

    const visitedCategoriesFilter = productsResponse?.available_filters?.filter(
      (filterId) => filterId.id === 'category',
    )
    // ? For challenge purposes, we only get the first 4 categories to make the breadcrumb
    const topCategories =
      visitedCategoriesFilter.length > 0 ? visitedCategoriesFilter[0].values.slice(0, 4) : []
    const visitedCategories = topCategories.length > 0 ? topCategories.map((item) => item.name) : []

    const items = productsResponse?.results?.map((result) => {
      const [amount, decimals] = result.price.toString().split('.')
      // ? This variable avoids to have a price with only one decimal.
      const decimal = String(decimals).length === 0 ? `0${decimals}` : decimals

      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: currencyFormatter(result.currency_id, Number(amount)),
          decimals: decimal,
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        city: result?.location?.city.name,
      }
    })

    return {
      data: {
        author: AUTHOR,
        categories: categories.length < 0 ? visitedCategories : categories,
        items,
      },
      hasError: false,
    }
  } catch (e: any) {
    // ? If we get an error, then the adapter will return an object {hasError: true, errorMessage: string}
    // ? This function is used to get the error in the page where we call the adapter.
    // ? We can then redirect the user to an error page for example
    return returnBackServiceError(e.message)
  }
}
