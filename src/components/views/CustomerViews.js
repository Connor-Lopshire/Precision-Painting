import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerEstimateContainer } from "../estimates/CustomerEstimateContainer"
import { CustomerEstimateDetails } from "../estimates/CustomerEstimateDetails"
import { InvoiceContainer } from "../invoices/InvoiceContainer"
import { InvoiceDetails } from "../invoices/InvoiceDetails"
import { NewRequestForm } from "../request/NewRequestForm"
import { RequestContainer } from "../request/RequestContainer"
import { WorkOrderContainer } from "../workOrders/WorkOrderContainer"


export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>


                    <Outlet />
                </>
            }>
                <Route path="InvoiceDetails/:invoiceId" element={<InvoiceDetails />} />
                <Route path="CustomerEstimateDetails/:estimateId" element={<CustomerEstimateDetails />} />
                <Route path="estimates" element={<CustomerEstimateContainer />} />
                <Route path="workOrders" element={<WorkOrderContainer />} />
                <Route path="request" element={<RequestContainer />} />
                <Route path="NewRequestForm" element={<NewRequestForm />} />
                <Route path="invoices" element={<InvoiceContainer />} />
            </Route>
        </Routes>
    )
}