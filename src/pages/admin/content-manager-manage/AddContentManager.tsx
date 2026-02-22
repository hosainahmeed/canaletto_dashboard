import FormalCard from "../../../components/shared/cards/FormalCard";
import { PageContent, PageLayout } from "../../../components/shared/PageLayout";
import { Input } from "../../../components/ui/input";

function AddContentManager() {
  return (
    <PageLayout title="Add Content Manager">
      <PageContent>
        <FormalCard
          header={
            <div>
              <h1 className="text-lg text-[#666666] font-nunito-semibold-italic">
                Content Manager
              </h1>
              <p className="text-sm text-[#B0B0B0] font-nunito-semibold-italic">
                Add a new content manager or update existing manager details.
              </p>
            </div>
          }
        >
          <div className="py-2">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter full name"
                    className="placeholder-gray-300 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="placeholder-gray-300 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    className="placeholder-gray-300 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter temporary password"
                    className="placeholder-gray-300 px-4 py-3"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium text-white cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(180deg,#D1B07F 0%,#B08B4F 100%)",
                  }}
                >
                  Add &amp; Send Invitation
                </button>
              </div>
            </form>
          </div>
        </FormalCard>
      </PageContent>
    </PageLayout>
  );
}

export default AddContentManager;
