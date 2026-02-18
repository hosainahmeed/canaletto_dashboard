import { Download, Eye } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoData from '../../../../components/shared/NoData'
import FormalCard from '../../../../components/shared/cards/FormalCard'
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout'

const invoicesData = [
  { id: '1', name: 'Invoice01 .Pdf', status: 'Open', statusColor: 'text-orange-500' },
  { id: '2', name: 'Invoice02 .Pdf', status: 'Partially Paid', statusColor: 'text-blue-500' },
  { id: '3', name: 'Invoice03 .Pdf', status: 'Paid', statusColor: 'text-green-500' },
]

const paymentPlanData = [
  { id: '1', name: 'Invoice01 .Pdf', date: '30 Aug 2025' },
  { id: '2', name: 'Invoice02 .Pdf', date: '30 Aug 2025' },
  { id: '3', name: 'Invoice03 .Pdf', date: '30 Aug 2025' },
]

function PaymentInvoices() {
  const [activeTab, setActiveTab] = useState<'invoices' | 'plan'>('invoices')
  const navigate = useNavigate()

  return (
    <PageLayout title={`The Wilds\nProject / Payment Invoices`} >
      <PageContent >
        <FormalCard header="Payment Invoices" bodyStyle="p-0">
          <div className="flex flex-col">
            {/* Toggle Header */}
            <div className="flex items-center gap-6 p-4 border-b border-muted-foreground/10">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="payment_view"
                  checked={activeTab === 'invoices'}
                  onChange={() => setActiveTab('invoices')}
                  className="w-4 h-4 accent-gray-600 cursor-pointer"
                />
                <span className={`text-sm font-medium ${activeTab === 'invoices' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-600`}>
                  Payment Invoices
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="payment_view"
                  checked={activeTab === 'plan'}
                  onChange={() => setActiveTab('plan')}
                  className="w-4 h-4 accent-gray-600 cursor-pointer"
                />
                <span className={`text-sm font-medium ${activeTab === 'plan' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-600`}>
                  Payment Plan
                </span>
              </label>
            </div>

            {/* List */}
            <div className="flex flex-col">
              {((activeTab === 'invoices' ? invoicesData : paymentPlanData) as any[]).length > 0 ? (
                (activeTab === 'invoices' ? invoicesData : paymentPlanData).map((item, index, array) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-4 ${index !== array.length - 1 ? 'border-b border-muted-foreground/10' : ''
                      }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-600 font-medium">{item.name}</span>
                      {'status' in item ? (
                        <span className={`text-xs ${item.statusColor}`}>{item.status}</span>
                      ) : (
                        <span className="text-xs text-gray-400">{item.date}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(activeTab === 'invoices'
                          ? `/admin/properties/invoices/${item.id}`
                          : `/admin/properties/payment-plan/${item.id}`
                        )}
                        className="p-2 rounded-md bg-[#FAF5FF] text-purple-500 hover:bg-[#F3E8FF] transition-colors cursor-pointer"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>
                      {activeTab === 'plan' && (
                        <button
                          className="p-2 rounded-md bg-[#EFF6FF] text-blue-500 hover:bg-[#DBEAFE] transition-colors cursor-pointer"
                          title="Download"
                        >
                          <Download size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <NoData message={activeTab === 'invoices' ? "No Payment Invoice Available" : "No Payment Plan Available"} />
              )}
            </div>
          </div>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default PaymentInvoices
