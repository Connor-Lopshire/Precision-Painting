// fetch estimate matching param estimate id -http://localhost:8088/estimates?_expand=workOrder&id=${estimateId}
// useState to estimate and setEstimate 
//  return  dispplayed estimate details and a check box to change estimate.approved to true 
// on submit click put the  estimate to http://localhost:8088/estimates?_expand=workOrder&id=${estimateId} and 
// return user to /estimates

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// add to CustomerViews
export const CustomerEstimateDetails = () => {
    const [estimate, setEstimate] = useState({
        approved: false
    })
    
    const navigate = useNavigate()





    const { estimateId } = useParams()
    useEffect(
        () => {
            fetch(`http://localhost:8088/estimates?_expand=workOrder&id=${estimateId}`)
                .then(response => response.json())
                .then((estimateObject) => {
                    setEstimate(estimateObject[0])
                })
        }, []
    )
    const handleButtonClick = (event) => {
      
        // post or put first ? 
        
        return fetch(`http://localhost:8088/estimates/${estimateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(estimate)
        })
            .then(response => response.json())
            .then(() => {
               navigate("/estimates")
    } )
}
    console.log(estimate)
    return (
        <section>

            <div>

                <div>  {estimate.price} </div>
                <div> {estimate?.workOrder?.address} </div>
                <div> {estimate.estimateDate} </div>
            </div>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="aprroval"> Approved:</label>
                        <input type="checkbox"
                            value={estimate.approved}
                            onChange={
                                (evt) => {
                                    const copy = { ...estimate }
                                    copy.approved = evt.target.checked
                                    setEstimate(copy)
                                    
                                }
                            } />
                    </div>
                </fieldset>
                <button

           onClick={(evt) => {
               handleButtonClick(evt)
           }}
           className="btn btn-primary">
           Submit 
       </button>
        </section>
    )

}
