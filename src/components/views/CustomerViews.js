import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerEstimateContainer } from "../estimates/CustomerEstimateContainer"
import { CustomerEstimateDetails } from "../estimates/CustomerEstimateDetails"
import { CustomerEstimateList } from "../estimates/CustomerEstimateList"
import { InvoiceContainer } from "../invoices/InvoiceContainer"
import { InvoiceDetails } from "../invoices/InvoiceDetails"
import { InvoiceList } from "../invoices/Invoices"
import { NewRequestForm } from "../request/NewRequestForm"
import { RequestContainer } from "../request/RequestContainer"
import { RequestList } from "../request/RequestList"
import { WorkOrderContainer } from "../workOrders/WorkOrderContainer"
import { WorkOrderList } from "../workOrders/WorkOrderList"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    

                    <Outlet />
                </>
            }>
              <Route path="InvoiceDetails/:invoiceId" element={<InvoiceDetails/>}/>
              <Route path="CustomerEstimateDetails/:estimateId" element={<CustomerEstimateDetails/>}/>
              <Route path="estimates" element={<CustomerEstimateContainer/>}/>
              <Route path="workOrders" element={<WorkOrderContainer/>}/>
              <Route path="request" element={<RequestContainer/>}/>
              <Route path="NewRequestForm" element={<NewRequestForm/>}/>
              <Route path="invoices" element={<InvoiceContainer/>}/>
            </Route>
        </Routes>
    )
}