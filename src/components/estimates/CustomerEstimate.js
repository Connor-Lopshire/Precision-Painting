// recieve and deconstruct props
// build estimate list items with prop values
//  include link to EstimateDetails passing estimate id as a param to=(`/estimates/${id}`)

import { Link } from "react-router-dom"

// add route with estimateId param to CustomerEstimateDetails in CustomerViews
export const CustomerEstimate = ({id, address, estimateDate, price}) => {
    return <>
    
    <Link to={`/CustomerEstimateDetails/${id}`}>{address}</Link>
    <div>{estimateDate}</div>
    </>
}