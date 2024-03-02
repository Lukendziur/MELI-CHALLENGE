import { API_BASE_URL } from '@/constants/constants'
import {
  IProductByIdResponse,
  IProductCategorieResponse,
  IProductDescriptionResponse,
} from '@/types/productById'
import { fetchRequest } from '@/utils/actions'

export const getProductById = async (id: string) =>
  fetchRequest<IProductByIdResponse>(`${API_BASE_URL}/items/${id}`)

export const getProductDescription = async (id: string) =>
  fetchRequest<IProductDescriptionResponse>(`${API_BASE_URL}/items/${id}/description`)

export const getProductCategorie = async (category: string) =>
  fetchRequest<IProductCategorieResponse>(`${API_BASE_URL}/categories/${category}`)
