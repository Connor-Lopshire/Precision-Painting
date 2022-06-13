import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { ApplicationViews } from "./ApplicationViews"
import { Authorized } from "./Authorized"

export const PrecisionPainting = () => {
    return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
				
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}