import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerEstimateDetails } from "../estimates/CustomerEstimateDetails"
import { CustomerEstimateList } from "../estimates/CustomerEstimateList"
import { InvoiceDetails } from "../invoices/InvoiceDetails"
import { InvoiceList } from "../invoices/Invoices"
import { NewRequestForm } from "../request/NewRequestForm"
import { RequestList } from "../request/RequestList"
import { WorkOrderList } from "../workOrders/WorkOrderList"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Precision Paint Company</h1>

                    <Outlet />
                </>
            }>
              <Route path="InvoiceDetails/:invoiceId" element={<InvoiceDetails/>}/>
              <Route path="CustomerEstimateDetails/:estimateId" element={<CustomerEstimateDetails/>}/>
              <Route path="estimates" element={<CustomerEstimateList/>}/>
              <Route path="workOrders" element={<WorkOrderList/>}/>
              <Route path="request" element={<RequestList/>}/>
              <Route path="NewRequestForm" element={<NewRequestForm/>}/>
              <Route path="invoices" element={<InvoiceList/>}/>
            </Route>
        </Routes>
    )
}