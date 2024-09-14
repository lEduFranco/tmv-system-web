import { Button } from '@/ui-components'

interface ListClientsProps {
  name: string
  address: string
  icon: React.ReactNode
}

const ListClientsCard: React.FC<ListClientsProps> = ({ name }) => {
  return (
    <div>
      <div>
        <Button size="sm" className="w-150">
          Cadastrar
        </Button>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Clientes</h2>
      </div>
      <div className="bg-white p-5 rounded-lg shadow gap-4">
        <div className="flex justify-between mb-5">
          <h4 className="text-xl font-semibold font-size-10">{name}</h4>
        </div>
      </div>
    </div>
  )
}

export { ListClientsCard }
