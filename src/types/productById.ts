export interface IProductByIdResponse {
  id: string
  title: string
  price: string
  pictures: { url: string }[]
  condition: string
  currency_id: string
  category_id: string
  shipping: {
    free_shipping: boolean
  }
  initial_quantity: number
}

export interface IProductDescriptionResponse {
  plain_text: string
}

export interface IProductByIdAdapted {
  id: string
  title: string
  price: {
    currency: string
    amount: string
    decimals: number | string
  }
  picture: string
  condition: string
  free_shipping: boolean
  sold_quantity: number
  description: string
  product_categorie: string[]
}

export interface IProductCategorieResponse {
  path_from_root: {
    id: string
    name: string
  }[]
}
