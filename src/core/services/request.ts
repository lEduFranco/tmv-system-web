import { AxiosResponse } from 'axios'
import { api } from './api'
import {
  clearCache,
  cacheIsExpired,
  hasInCache,
  setInCache,
  getForCache,
} from './cache'

type RequestProps = {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  params?: any
  cacheTime?: number
}

type Respose<T> = {
  code: number
  data: T
}

export async function request<T>({
  url,
  method = 'get',
  body,
  params,
  cacheTime = 30,
}: RequestProps): Promise<Respose<T>> {
  const query = {}
  let axiosResponse: AxiosResponse

  const key = `${url} + ${params ? JSON.stringify(params) : null} + ${method}`

  if (['post', 'put', 'delete'].includes(method)) {
    clearCache()
  }

  if (method === 'get') {
    Object.assign(query, { params })
  }

  if (method === 'post' || method === 'put') {
    Object.assign(query, body)
  }

  if (!hasInCache(key) || cacheIsExpired(key, cacheTime)) {
    axiosResponse = await api[method](url, query)

    setInCache(key, axiosResponse)
  }

  axiosResponse = getForCache(key)

  if (!axiosResponse) return

  return {
    code: axiosResponse.status,
    data: axiosResponse.data,
  }
}
