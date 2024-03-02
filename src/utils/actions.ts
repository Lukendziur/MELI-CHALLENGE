// ? Next server actions run always on the server
// ? <T> is a generic type, allows me to pass customs interfaces

import { IRequestError } from '@/types/globals'

// ? This fetchRequest function allows to handle multiple and flexible api calls
export const fetchRequest = async <T>(url: string): Promise<T & IRequestError> => {
  const response = await fetch(url, {
    method: 'GET',
  })

  const data = (await response.json()) as T & IRequestError

  return data
}
