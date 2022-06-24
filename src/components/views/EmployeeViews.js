import { Outlet, Route, Routes } from "react-router-dom"
import { InvoiceContainer } from "../invoices/InvoiceContainer"
import { InvoiceList } from "../invoices/Invoices"
import { AcceptRequest } from "../request/AcceptRequest"
import { RequestContainer } from "../request/RequestContainer"
import { RequestList } from "../request/RequestList"
import { CompleteWorkOrder } from "../workOrders/CompleteWorkOrder"
import { WorkOrderContainer } from "../workOrders/WorkOrderContainer"
import { WorkOrderList } from "../workOrders/WorkOrderList"
export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    

                    <Outlet />
                </>
            }>
                
                <Route path="acceptRequest/:workOrderId" element={<AcceptRequest />} />
                <Route path="request" element={<RequestContainer />} />
                <Route path="completeWorkOrder/:estimateId" element={<CompleteWorkOrder />} />
                <Route path="workOrders" element={<WorkOrderContainer />} />
                <Route path="invoices" element={<InvoiceContainer />} />
             

            </Route>
        </Routes>
    )
}