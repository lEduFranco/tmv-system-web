type items = {
  title: string
  value: string
}

interface DashboardCardProps {
  title: string
  icon: React.ReactNode
  date: string
  total: string
  items: items[]
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  date,
  total,
  items,
}) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow gap-4 w-2/4 h-80">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold">{title}</h3>
        {icon}
      </div>
      <div className="flex items-center justify-between mb-10 bg-pink-50">
        <h4 className="text-md font-semibold text-red-950">{date}</h4>
        <h4 className="text-md font-semibold text-red-950">{total}</h4>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <p className="text-3x2 font-semibold">{item.title}</p>
          <p className="text-3x2 font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export { DashboardCard }
