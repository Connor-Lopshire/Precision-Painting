// deconstruct prop 
// return list items as links with route param of workOrderId  
import { Link } from "react-router-dom"

export const Request = ({id, address, date}) => {
    return <section className="activeWorkOrder" >
    <div>
        <Link to={`/acceptRequest/${id}`} >{address}</Link>
        </div>
    <div>Date Requested{date}</div>

</section>
}