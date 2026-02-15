import { cn } from '../../../lib/utils'


function IconWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("flex items-center justify-center p-4 rounded-lg cursor-pointer", className)}>
      {children}
    </div>
  )
}

export default IconWrapper
