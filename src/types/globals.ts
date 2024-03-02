export interface IRequestError {
  error: string
  message: string
}

export type AdapterResponse<T> = {
  data?: T
  hasError?: boolean
  errorMessage?: string
}

export type Adapter<P, R> = (params: P) => Promise<AdapterResponse<R> & Partial<IRequestError>>
