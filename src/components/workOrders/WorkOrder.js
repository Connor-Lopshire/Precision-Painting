// deconstruct prop build work order list item
// make link to invoice form  with param of estimateId
import { Link } from "react-router-dom"

export const WorkOrder = ({id, address, date}) => {
    return <section className="tile is-parent box has-background-white-ter" >
  
    <div className="tile is-child">
        <Link className="has-text-grey-dark" to={`/completeWorkOrder/${id}`} >{address}</Link>
        </div>
    <div className="tile is-child">Date Started: {date}</div>

</section>
}