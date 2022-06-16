import { Link, useNavigate } from "react-router-dom"
export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/request">Request</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/invoices">Invoices</Link>
            </li>
            
            {
                localStorage.getItem("paint_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("paint_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
