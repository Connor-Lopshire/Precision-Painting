// deconstruct prop 
// return list items as links with route param of workOrderId  
import { Link } from "react-router-dom"

export const Request = ({id, address, date}) => {
    return <section className="tile is-parent box has-background-white-ter" >
 
        <Link className="tile is-child has-text-grey-dark" to={`/acceptRequest/${id}`} >{address}</Link>
    <div className="tile is-child">Date Requested{date}</div>

</section>
}