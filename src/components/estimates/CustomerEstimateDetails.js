// fetch estimate matching param estimate id -http://localhost:8088/estimates?_expand=workOrder&id=${estimateId}
// useState to estimate and setEstimate 
//  return  dispplayed estimate details and a check box to change estimate.approved to true 
// on submit click put the  estimate to http://localhost:8088/estimates?_expand=workOrder&id=${estimateId} and 
// return user to /estimates

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// add to CustomerViews
export const CustomerEstimateDetails =  () => {
        const [estimate, setEstimate] = useState(

            {
                aprroved: false
            }
            ) 
            const {estimateId} = useParams()
        useEffect(
            () => {
                fetch(`http://localhost:8088/estimates?_expand=workOrder&id=${estimateId}`)
                .then(response => response.json())
                .then((estimateObject) => {
                    setEstimate(estimateObject)
                })
            }, []
        )
        return <section>
            
            <div>{estimate?.workOrder?.address}</div>
            <div>{estimate?.price}</div>
            <div>{estimate.estimateDate}</div>
           
    
    
        </section>
        
    }
