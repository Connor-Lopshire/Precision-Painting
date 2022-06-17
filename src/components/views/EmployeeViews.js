import { Outlet, Route, Routes } from "react-router-dom"
import { InvoiceList } from "../invoices/Invoices"
import { AcceptRequest } from "../request/AcceptRequest"
import { RequestList } from "../request/RequestList"
import { CompleteWorkOrder } from "../workOrders/CompleteWorkOrder"
import { WorkOrderList } from "../workOrders/WorkOrderList"
export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Precision Paint Company</h1>

                    <Outlet />
                </>
            }>
                <Route path="acceptRequest/:workOrderId" element={<AcceptRequest />} />
                <Route path="request" element={<RequestList />} />
                <Route path="completeWorkOrder/:estimateId" element={<CompleteWorkOrder />} />
                <Route path="workOrders" element={<WorkOrderList />} />
                <Route path="invoices" element={<InvoiceList />} />

            </Route>
        </Routes>
    )
}