
import { HugeiconsIcon } from '@hugeicons/react'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import { City01Icon } from '@hugeicons/core-free-icons'


const PropertyManager = () => {
  return (
    <PageLayout title="Manage Properties" action={<Button variant="outline">Add New Property</Button>} icon={<HugeiconsIcon icon={City01Icon} />}>
      <PageContent children={<h1>Property Manager</h1> } />
    </PageLayout>
  )
}

export default PropertyManager