export interface IProductsBySearchResponse {
  available_filters: {
    id: string
    name: string
    type: string
    values: { id: string; name: string; results: number }[]
  }[]
  filters: {
    name: string
    values: { path_from_root: { id: string; name: string }[] }[]
  }[]
  results: {
    currency_id: string
    price: number
    shipping: {
      free_shipping: boolean
    }
    id: string
    title: string
    thumbnail: string
    condition: string
    location: {
      city: {
        name: string
      }
    }
  }[]
}

export interface IItems {
  id: string
  title: string
  price: {
    currency: string
    amount: string
    decimals: number | string
  }
  picture: string
  condition?: string
  free_shipping: boolean
  city: string
}

export interface IProductsBySearchResponseAdapted {
  author: {
    name: string
    lastname: string
  }
  categories: string[]
  items: IItems[]
}
