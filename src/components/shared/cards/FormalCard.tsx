import { memo, Suspense } from 'react'
import { cn } from '../../../lib/utils'
import { Loader } from 'lucide-react'


function FormalCard({ children, header, bodyStyle, headerStyle }: { children: React.ReactNode, header?: React.ReactNode, bodyStyle?: string, headerStyle?: string }) {
  return (
    <Suspense fallback={<Loader className='animate-spin' />}>
      <div className={cn('border-[.5px] border-muted-foreground/40 rounded-lg', bodyStyle)}>
        {header && <div className={cn("border-b-[.5px] border-muted-foreground/40 p-4", headerStyle)}>
          {header}
        </div>}
        <div className="p-4">
          {children}
        </div>
      </div>
    </Suspense>
  )
}

export default memo(FormalCard)
