import React, { useCallback, useState } from 'react'

import { OptionSchema } from '@/ui-components/InputSelect'
import { InputSelect } from '@/ui-components'

const providersList = [
  {
    id: '1',
    name: 'Sakura Haruno',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '2',
    name: 'Hinata Hyuga',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '3',
    name: 'Ino Yamanaka',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '4',
    name: 'Tsunade Senju',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '5',
    name: 'Temari',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '6',
    name: 'Karin Uzumaki',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '7',
    name: 'Kurenai Yuhi',
    birthDate: '',
    uniforSize: 'M',
  },
  {
    id: '8',
    name: 'Anko Mitarashi',
    birthDate: '',
    uniforSize: 'M',
  },
]

export const Example: React.FC = () => {
  const [providersOptions, setProvidersOptions] = useState([])
  const [selectedProvider, setSelectedProvider] = useState<OptionSchema>(
    {} as OptionSchema,
  )

  const handleGetProvidersList = useCallback(
    async (smartSelectValue: string) => {
      if (smartSelectValue.length > 3) {
        const formattedProvidersList = providersList.map((provider) => {
          return {
            id: provider.id,
            title: provider.name,
            value: provider.id,
          }
        })

        setProvidersOptions(formattedProvidersList)
      }
    },
    [],
  )

  const handleSelectProvider = useCallback((provider) => {
    setSelectedProvider(provider)
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <InputSelect
        placeholder="Digite um nome"
        options={providersOptions}
        onValueChange={handleGetProvidersList}
        setSelectedOption={handleSelectProvider}
      />
      <div className="flex">
        <div className="flex flex-col gap-2">
          <span>
            <strong>Selected ID:</strong> {selectedProvider.id}
          </span>
          <span>
            <strong>Selected Title:</strong> {selectedProvider.title}
          </span>
          <span>
            <strong>Selected Value:</strong> {selectedProvider.value}
          </span>
        </div>
      </div>
    </div>
  )
}
