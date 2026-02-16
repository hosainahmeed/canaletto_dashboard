import { cn } from '../../../lib/utils'


function IconWrapper({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div onClickCapture={onClick} className={cn("flex items-center justify-center p-4 rounded-lg cursor-pointer", className)}>
=======
    <div
    onClick={onClick}
    className={cn("flex items-center justify-center p-4 rounded-lg cursor-pointer", className)}>
>>>>>>> 5577a2c (user render routing)
=======
    <div onClick={onClick} className={cn("flex items-center justify-center p-4 rounded-lg cursor-pointer", className)}>
>>>>>>> 90d7d39 (code merge)
      {children}
    </div>
  )
}

export default IconWrapper
