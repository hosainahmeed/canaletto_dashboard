import { Eye } from 'lucide-react'
import FormalCard from '../../../../components/shared/cards/FormalCard'
import NoData from '../../../../components/shared/NoData'
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout'

const propertyFiles = [
  { id: '1', name: 'Property_document 01 .Pdf', pdfLink: 'https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf' },
  { id: '2', name: 'Property_document 02 .Pdf', pdfLink: 'https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf' },
  { id: '3', name: 'Property_document 03 .Pdf', pdfLink: 'https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf' },
]

function PropertyFiles() {
  return (
    <PageLayout title="The Wilds
Project / Property Files" >
      <PageContent >
        <FormalCard header="Property Files" bodyStyle="p-0">
          {propertyFiles.length > 0 ? (
            <div className="flex flex-col">
              {propertyFiles.map((file, index) => (
                <div
                  key={file.id}
                  className={`flex items-center justify-between py-4 ${index !== propertyFiles.length - 1 ? 'border-b border-muted-foreground/10' : ''
                    }`}
                >
                  <span className="text-gray-600 font-medium">{file.name}</span>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded-md bg-[#FAF5FF] text-purple-500 hover:bg-[#F3E8FF] transition-colors cursor-pointer"
                      title="View"
                      onClick={() => window.open(file.pdfLink, '_blank')}
                    >
                      <Eye size={18} />
                    </button>
                    {/* <a href={file.pdfLink} download>
                      <button
                        className="p-2 rounded-md bg-[#EFF6FF] text-blue-500 hover:bg-[#DBEAFE] transition-colors cursor-pointer"
                        title="Download"
                      >
                        <Download size={18} />
                      </button>
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoData message="No Property Files Available" />
          )}
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default PropertyFiles
