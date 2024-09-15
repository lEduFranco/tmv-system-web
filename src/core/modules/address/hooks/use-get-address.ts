import { useState, useEffect, useCallback } from 'react'

import { getAddress } from '../service/address-service'
import { useToast } from '@/ui-components'
import { AddressType } from '../types'

const useGetAddress = () => {
  const { addToast } = useToast()

  const [address, setAddress] = useState<Address[]>([])
  const [loading, setLoading] = useState(true)

  const getAddress = useCallback(
    async (date: string) => {
      try {
        setLoading(true)
        const response = await getAddress({ date })
        setAddress(response.data)
      } catch (error) {
        addToast({ title: 'Error', description: error.message, type: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0]
    getAddress(date)
  }, [getAddress])

  return { address, loading, getAddress }
}

export { useGetAddress }
