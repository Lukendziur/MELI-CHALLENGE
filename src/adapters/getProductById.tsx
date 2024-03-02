import { AUTHOR } from '@/constants/constants'
import {
  getProductById,
  getProductCategorie,
  getProductDescription,
} from '@/services/getProductByIdService'
import { PRODUCT_CONDITION } from '@/types/enums'
import { Adapter } from '@/types/globals'
import { currencyFormatter, returnBackServiceError } from '@/utils/functions'

export const getProductByIdAdapter: Adapter<{ id: string }, any> = async ({ id }) => {
  try {
    const [productResponse, descriptionResponse] = await Promise.all([
      getProductById(id),
      getProductDescription(id),
    ])

    const productCategorie = await getProductCategorie(productResponse.category_id)
    const categoriesArray = productCategorie.path_from_root.map((item) => item.name)

    const [amount, decimals] = productResponse.price.toString().split('.')
    // ? decimal avoid to have a price with only one decimal.
    const decimal = String(decimals).length === 0 ? `0${decimals}` : decimals
    const productByIdAdapted = {
      author: AUTHOR,
      item: {
        id: productResponse.id,
        title: productResponse.title,
        price: {
          currency: productResponse.currency_id,
          amount: currencyFormatter(productResponse.currency_id, Number(amount)),
          decimals: decimal,
        },
        picture: productResponse.pictures[0].url,
        // ? PRODUCT_CONDITION is used to map "new" and "used" into "Nuevo" and "Usado"
        condition:
          productResponse.condition === 'new' ? PRODUCT_CONDITION.new : PRODUCT_CONDITION.used,
        free_shipping: productResponse.shipping.free_shipping,
        sold_quantity: productResponse.initial_quantity,
        description: descriptionResponse.plain_text || 'Sin descripción',
        product_categorie: categoriesArray,
      },
    }

    return {
      data: productByIdAdapted,
      hasError: false,
    }
  } catch (e: any) {
    return returnBackServiceError(e.message)
  }
}
