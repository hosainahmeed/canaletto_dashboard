import FormalCard from '../../../components/shared/cards/FormalCard'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'

function AddPropertyManager() {
  return (
    <PageLayout title='Add Property Manager'>
      <PageContent>
        <FormalCard header={
          <div>
            <h1 className='text-lg text-[#666666] font-nunito-semibold-italic'>Property Manager</h1>
            <p className='text-sm text-[#B0B0B0] font-nunito-semibold-italic'>Add a new Property Manager with necessary details.</p>
          </div>
        }>
          <h1>Add Property Manager</h1>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default AddPropertyManager
