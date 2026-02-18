import { useState } from 'react'
import JoditComponent from '../../../components/shared/JoditComponent'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'

function Terms() {
  const [content, setContent] = useState<string>('')
  return (
    <PageLayout title='Terms & Conditions'>
      <PageContent>
        <JoditComponent content={content} setContent={setContent} />
        <Button className='mt-4 bg-brand text-white' >Save Changes</Button>
      </PageContent>
    </PageLayout>
  )
}

export default Terms
