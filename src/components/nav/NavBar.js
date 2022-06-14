import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {

    const localPaintUser = localStorage.getItem("paint_user")
    const UserObject = JSON.parse(localPaintUser)
   if (UserObject.staff) {
       return <EmployeeNav/>
   }
   else {
   return <CustomerNav/>
}
}