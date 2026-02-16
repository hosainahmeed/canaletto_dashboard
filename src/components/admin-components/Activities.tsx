import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'
import { lazy, memo, Suspense, useMemo } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
const FormalCard = lazy(() => import('../shared/cards/FormalCard'))
function Activities() {
  const renderHeader = useMemo(() => {
    return (
      <div className='flex justify-between items-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='font-nunito-semibold-italic text-muted-foreground'>Showing activities for Today</motion.h1>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Today" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="last_24_hours">Last 24 Hours</SelectItem>
              <SelectItem value="last_week">Last Week</SelectItem>
              <SelectItem value="last_fortnight">Last Fortnight</SelectItem>
              <SelectItem value="last_month">Last Month</SelectItem>
              <SelectItem value="last_year">Last Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    )
  }, [])
  return (
    <Suspense fallback={<Loader className='animate-spin' />}>
      <FormalCard header={
        renderHeader
      }>
        <div>
          <h1 className='font-nunito-semibold-italic text-muted-foreground'>hosain</h1>
        </div>
      </FormalCard>
    </Suspense>
  )
}

export default memo(Activities)
