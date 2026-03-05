import { LockPasswordIcon, UserEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { PageContent, PageLayout } from "../../../components/shared/PageLayout";
import FormalCard from "../../../components/shared/cards/FormalCard";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { useParams } from "react-router-dom";
import { useGetSinglePropertyManagerQuery } from "../../../redux/propertyManager/propertyMangerApi";
import { Loader } from "lucide-react";

function PropertyManagerDetails() {
  const { id } = useParams();
  
  const { data: userDatas, isLoading } = useGetSinglePropertyManagerQuery(id as void);

  const manager = userDatas?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin text-brand" size={40} />
      </div>
    );
  }

  const firstLetter = manager?.name ? manager.name.charAt(0).toUpperCase() : "U";
  const status = manager?.user?.isActive ? "Active" : "Blocked";

  return (
    <PageLayout title="Property Manager Details">
      <PageContent>
 
        <div className="w-32 h-32 mb-6">
          {manager?.profile_image ? (
            <img
              src={manager.profile_image}
              alt={manager.name}
              className="w-full h-full rounded-md object-cover border"
            />
          ) : (
            <div className="w-full h-full rounded-md bg-brand/10 text-brand flex items-center justify-center text-4xl font-bold border border-brand/20">
              {firstLetter}
            </div>
          )}
        </div>

        <FormalCard header="Manager Information">
          <div className="responsive-grid-2 gap-y-6">
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Full Name
              </h1>
              <h1 className="text-[#666666] font-medium">{manager?.name || "N/A"}</h1>
            </div>
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Email
              </h1>
              <h1 className="text-[#666666] font-medium">{manager?.email || "N/A"}</h1>
            </div>
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Contact Phone
              </h1>
              <h1 className="text-[#666666] font-medium">{manager?.phone || "N/A"}</h1>
            </div>
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Status
              </h1>
              <h1
                className={cn(
                  "font-semibold",
                  status === "Active" ? "text-green-600" : "text-red-600"
                )}
              >
                {status}
              </h1>
            </div>
          </div>
        </FormalCard>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button className="bg-linear-to-bl to-brand from-[#B08D59] py-6 px-6">
            <HugeiconsIcon icon={UserEdit01Icon} className="mr-2" />
            {status === "Active" ? "Block This Manager" : "Unblock This Manager"}
          </Button>
          <Button className="bg-linear-to-bl to-red-900 from-red-500 py-6 px-6">
            <HugeiconsIcon icon={LockPasswordIcon} className="mr-2" />
            Delete This Manager
          </Button>
        </div>
      </PageContent>
    </PageLayout>
  );
}

export default PropertyManagerDetails;