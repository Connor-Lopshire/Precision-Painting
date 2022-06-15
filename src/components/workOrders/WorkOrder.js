// deconstruct prop build work order list item
// make link to invoice form  with param of estimateId
import { Link } from "react-router-dom"

export const WorkOrder = ({id, address, date}) => {
    return <section key={`activeWorkOrder--${id}`} className="activeWorkOrder" >
    <div>
        <Link to={`/completeWorkOrder/${id}`} >{address}</Link>
        </div>
    <div>Date Started{date}</div>

</section>
}