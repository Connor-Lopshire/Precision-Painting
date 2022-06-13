import { Outlet, Route, Routes } from "react-router-dom"
export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Precision Paint Company</h1>

                    <Outlet />
                </>
            }>
              
            </Route>
        </Routes>
    )
}