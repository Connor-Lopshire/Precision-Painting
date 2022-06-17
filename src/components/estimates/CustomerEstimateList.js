// fetch http://localhost:8088/estimates?_expand=workOrder&approved=false
// most efficent way to display only the logged in users estimates- filter after fetch or before?- if not before estimates.filter(estimate.workOrder.userId === userObject.id)
// map through and display  <CustomerEstimate> -send needed keys as props to CustomerEstimate
// add  corresponding route in CustomerViews

import { useEffect, useState } from "react"
import { CustomerEstimate } from "./CustomerEstimate"


export const CustomerEstimateList = () => {
    const [estimates, setEstimates] = useState([])
    const [filteredEstimates, setFilteredEstimates] = useState([])
    const localePaintUser = localStorage.getItem("paint_user")
    const paintUserObject = JSON.parse(localePaintUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/estimates?_expand=workOrder&approved=false&completed=false`)
                .then(response => response.json())
                .then((estimatesArray) => {
                    setEstimates(estimatesArray)
                })
        },
        [] // When this array is empty, 

    )
    useEffect(
        () => {
            const myEstimates = estimates.filter(estimate => estimate?.workOrder?.userId === paintUserObject.id)
            setFilteredEstimates(myEstimates)

        }, [estimates]
    )
    return <article>
            <h2>Open Estimates</h2>

        {<>
                {filteredEstimates.map((estimate) =><CustomerEstimate id={estimate.id} address={estimate.workOrder.address} estimateDate={estimate.estimateDate} price={estimate.price} /> )
                }
            </>



        }

    </article>
}