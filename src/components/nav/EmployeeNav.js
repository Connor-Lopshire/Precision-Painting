import { Link, useNavigate } from "react-router-dom"

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
        // <ul className="navbar">
        //     <li className="navbar__item active">
        //         <Link className="navbar__link" to="/request">Request</Link>
        //     </li>
        //     <li className="navbar__item active">
        //         <Link className="navbar__link" to="/invoices">Invoices</Link>
        //     </li>
        //     <li className="navbar__item active">
        //         <Link className="navbar__link" to="/workOrders">Active Work</Link>
        //     </li>

        //     {
        //         localStorage.getItem("paint_user")
        //             ? <li className="navbar__item navbar__logout">
        //                 <Link className="navbar__link" to="" onClick={() => {
        //                     localStorage.removeItem("paint_user")
        //                     navigate("/", { replace: true })
        //                 }}>Logout</Link>
        //             </li>
        //             : ""
        //     }
        // </ul>
<section className="hero is-info is-small has-background-grey">
    <div className="hero-head">
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="/ppclogo.png" alt="Logo"/>
                    </a>
                    <span className="navbar-burger" data-target="navbarMenuHeroB">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active has-background-grey">
                        {
                localStorage.getItem("paint_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("paint_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
                        </a>



                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div className="hero-body">
        <div className="container has-text-centered">
            <p className="title is-1 mb-6 ">
                Precision Painting
            </p>
            
        </div>
    </div>

    <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
                <ul>
                    <li >
                    <Link className="navbar__link" to="/request">Request</Link>
                    </li>
                    <li>
                    <Link className="navbar__link" to="/invoices">Invoices</Link>
                    </li>
                    <li>
                    <Link className="navbar__link" to="/workOrders">Active Work</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    </div>
</section>
    )
}