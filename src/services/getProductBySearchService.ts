import { API_BASE_URL } from '@/constants/constants'
import { IProductsBySearchResponse } from '@/types/productsBySearch'
import { fetchRequest } from '@/utils/actions'

export const getProductsBySearchService = async (search: string) =>
  fetchRequest<IProductsBySearchResponse>(
    `${API_BASE_URL}/sites/MLA/search?q=:${search}&limit=4&status=CERTIFIED`,
  )
