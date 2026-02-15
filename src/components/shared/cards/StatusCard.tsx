import { cn } from '../../../lib/utils'

function StatusCard({ title, value, icon }: { title: string, value: number, icon: React.ReactNode }) {
  return (
    <div className={cn('border-[.5px] bg-brand/20 border-card-border/40 p-4 rounded-lg')}>
      <div>
        <div>
          <h1 className='text-[24px] font-semibold'>
            {title}
          </h1>
          <h1 className='text-[24px] font-semibold text-brand'>
            {value}
          </h1>
        </div>
        <div className='flex items-center bg-brand/20 w-fit float-end p-2 rounded  justify-end text-brand'>
          {icon}
        </div>
      </div>
    </div>
  )
}

export default StatusCard
