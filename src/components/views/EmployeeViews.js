import { Outlet, Route, Routes } from "react-router-dom"
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
             
             <Route path="completeWorkOrder/:estimateId" element={<CompleteWorkOrder/>}/> 
             <Route path="workOrders" element={<WorkOrderList/>}/>
            </Route>
        </Routes>
    )
}