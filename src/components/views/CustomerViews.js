import { Outlet, Route, Routes } from "react-router-dom"
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
            </Route>
        </Routes>
    )
}