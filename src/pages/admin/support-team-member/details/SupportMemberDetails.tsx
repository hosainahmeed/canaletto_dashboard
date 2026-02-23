import { LockPasswordIcon, UserEdit01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import FormalCard from '../../../../components/shared/cards/FormalCard';
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout';
import Space from '../../../../components/shared/Space';
import { Button } from '../../../../components/ui/button';
import TakeConfirm from '../../../../components/ui/take-confirm';
import { cn } from '../../../../lib/utils';


function SupportMemberDetails() {
  const memberDetails = {
    profileImage:
      "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
    fullName: "Roberts Junior",
    email: "robert @canaletto.com",
    contactPhone: "+ 1 919 - 555 -0284",
    status: "Active",
  };
  return (
    <PageLayout title="Support Team Member Details">
      <PageContent>
        <div className="w-32 h-32 mb-4">
          <img
            src={memberDetails?.profileImage}
            alt="Profile"
            className="w-full h-full rounded-md"
          />
        </div>
        <FormalCard header="Manager Information">
          <div className="responsive-grid-2">
            <div className="">
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic">
                Full Name
              </h1>
              <h1 className="text-[#666666]">{memberDetails?.fullName}</h1>
            </div>
            <div className="">
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic">
                Email
              </h1>
              <h1 className="text-[#666666]">{memberDetails?.email}</h1>
            </div>
            <div className="">
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic">
                Contact Phone
              </h1>
              <h1 className="text-[#666666]">{memberDetails?.contactPhone}</h1>
            </div>
            <div className="text-[#B0B0B0] font-nunito-semibold-italic">
              <h1>Status</h1>
              <h1
                className={cn(
                  "font-semibold",
                  memberDetails?.status === "Active"
                    ? "text-green-600"
                    : "text-red-600",
                )}
              >
                {memberDetails?.status}
              </h1>
            </div>
          </div>
          <Space size={4} />
        </FormalCard>

        <div className="flex gap-2 mt-6">
          <TakeConfirm
            title="Block this support team member?"
            onConfirm={() => {
              // TODO: Implement block logic
            }}
            confirmText="Block"
            cancelText="Cancel"
          >
            <Button className="bg-linear-to-bl to-brand from-[#B08D59] py-5">
              <HugeiconsIcon icon={UserEdit01Icon} />
              Block
            </Button>
          </TakeConfirm>
          <TakeConfirm
            title='Are you sure you want to delete?'
            onConfirm={() => {
              // TODO: Implement delete logic
            }}
            confirmText="Delete"
            cancelText="Cancel"
          >
            <Button className="bg-linear-to-bl to-red-900 from-red-500 py-5">
              <HugeiconsIcon icon={LockPasswordIcon} />
              Delete this Client
            </Button>
          </TakeConfirm>
        </div>
      </PageContent>
    </PageLayout>
  )
}

export default SupportMemberDetails
