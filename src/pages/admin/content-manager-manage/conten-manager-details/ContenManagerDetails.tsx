import { LockPasswordIcon, UserEdit01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import FormalCard from '../../../../components/shared/cards/FormalCard';
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout';
import Space from '../../../../components/shared/Space';
import { Button } from '../../../../components/ui/button';
import { cn } from '../../../../lib/utils';
import { 
  useDeleteContentManagerMutation, 
  useGetSingleContentManagerQuery 
} from '../../../../redux/contentManager/contentManagerApi';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Loader } from 'lucide-react';
import TakeConfirm from '../../../../components/ui/take-confirm'; 
import toast from 'react-hot-toast';

function ContenManagerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetSingleContentManagerQuery(id as string);
  
  const [deleteContentManager, { isLoading: isDeleting }] = useDeleteContentManagerMutation();

  const manager = data?.data;

  const handleDelete = async () => {
    try {
      const res = await deleteContentManager(id as string).unwrap();
      if (res.success) {
        toast.success("Content Manager deleted successfully!");
        navigate("/admin/content-manager", { replace: true });
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to delete content manager.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin text-brand" size={40} />
      </div>
    );
  }

  const fullName = manager?.name || "N/A";
  const email = manager?.email || "N/A";
  const phone = manager?.phone || "N/A";
  const isActive = manager?.user?.isActive;
  const status = isActive ? "Active" : "Blocked";
  const profileImage = manager?.profile_image;
  const firstLetter = fullName.trim().charAt(0).toUpperCase();

  return (
    <PageLayout title="Content Manager Details">
      <PageContent>
    
        <div className="w-32 h-32 mb-6">
          {profileImage ? (
            <img
              src={profileImage}
              alt={fullName}
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
              <h1 className="text-[#666666] font-medium">{fullName}</h1>
            </div>
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Email
              </h1>
              <h1 className="text-[#666666] font-medium">{email}</h1>
            </div>
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Contact Phone
              </h1>
              <h1 className="text-[#666666] font-medium">{phone}</h1>
            </div>
            <div>
              <h1 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                Status
              </h1>
              <h1
                className={cn(
                  "font-semibold",
                  isActive ? "text-green-600" : "text-red-600"
                )}
              >
                {status}
              </h1>
            </div>
          </div>
          <Space size={4} />
        </FormalCard>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button className="bg-linear-to-bl to-brand from-[#B08D59] py-6 px-6">
            <HugeiconsIcon icon={UserEdit01Icon} className="mr-2" />
            {isActive ? "Block this Manager" : "Unblock this Manager"}
          </Button>

          <TakeConfirm
            title={`Are you sure you want to delete ${fullName}?`}
            description="This action cannot be undone and the manager's account will be permanently removed."
            onConfirm={handleDelete}
            confirmText="Yes, Delete"
            cancelText="Cancel"
          >
            <Button 
              disabled={isDeleting}
              className="bg-linear-to-bl to-red-900 from-red-500 py-6 px-6 min-w-[200px]"
            >
              {isDeleting ? (
                <Loader className="animate-spin w-5 h-5 mr-2" />
              ) : (
                <HugeiconsIcon icon={LockPasswordIcon} className="mr-2" />
              )}
              {isDeleting ? "Deleting..." : "Delete this Manager"}
            </Button>
          </TakeConfirm>
        </div>
      </PageContent>
    </PageLayout>
  );
}

export default ContenManagerDetails;