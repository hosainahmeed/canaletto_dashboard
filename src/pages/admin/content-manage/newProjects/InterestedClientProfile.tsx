import FormalCard from '../../../../components/shared/cards/FormalCard'
import {  PageLayout } from '../../../../components/shared/PageLayout'


const InterestedClientProfile = () => {

     const Project_Information = {
    full_name: "John Doe",
    email_address: "john.doe@example.com",
    phone: "+971 50 123 4567",
    Interesed_on: "27 Aug 2026",
    message: "I am interested in the Armani Beach Residences project. Please provide more details about the available units and pricing.",

  };



  return (
    <div>
        <PageLayout title="Armani Beach Residences (Palm Jumeirah) / Interested Clients Details">
           {/* Project Information */}
                  <div className="lg:col-span-3">
                    <FormalCard
                      header="Project Information"
                      headerStyle="font-nunito-semibold-italic"
                    >
                      <div className="w-full p-4">
                        {/* SAME 2 COLUMN LAYOUT */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                              Full Name
                            </h3>
                            <p className="text-gray-700 font-medium mt-1">
                              {Project_Information.full_name}
                            </p>
                          </div>
          
                          <div>
                            <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                              Email Address
                            </h3>
                            <p className="text-gray-700 font-medium mt-1">
                              {Project_Information.email_address}
                            </p>
                          </div>
          
                          <div>
                            <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                              Phone/WhatsApp
                            </h3>
                            <p className="text-gray-700 font-medium mt-1">
                              {Project_Information.phone}
                            </p>
                          </div>
          
                          <div>
                            <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                              Interested On
                            </h3>
                            <p className="text-gray-700 font-medium mt-1">
                              {Project_Information.Interesed_on}
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                              Message
                            </h3>
                            <p className="text-gray-700 font-medium mt-1">
                              {Project_Information.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FormalCard>
                  </div>
        </PageLayout>
    </div>
  )
}

export default InterestedClientProfile