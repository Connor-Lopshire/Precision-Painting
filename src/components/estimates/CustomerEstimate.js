// recieve and deconstruct props
// build estimate list items with prop values
//  include link to EstimateDetails passing estimate id as a param to=(`/estimates/${id}`)

import { Link } from "react-router-dom"

// add route with estimateId param to CustomerEstimateDetails in CustomerViews
export const CustomerEstimate = ({id, address, estimateDate, price}) => {
     

 return    <section className="tile is-parent box has-background-white-ter">
   

    <Link  className="tile is-child has-text-grey-dark" to={`/CustomerEstimateDetails/${id}`}>{address}</Link>
 
    <div className="tile is-child">{estimateDate}</div>
    </section>
    
}