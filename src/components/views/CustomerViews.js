import { Outlet, Route, Routes } from "react-router-dom"
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
              <Route path="workOrders" element={<WorkOrderList/>}/>
              <Route path="request" element={<RequestList/>}/>
              <Route path="NewRequestForm" element={<NewRequestForm/>}/>

            </Route>
        </Routes>
    )
}