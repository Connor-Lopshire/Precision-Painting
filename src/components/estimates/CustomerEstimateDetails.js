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
            })
    }
    console.log(estimate)
    return (<article className=" has-background-white-ter  pb-6 ml-2">

        <h2 className="title is-2  has-background-white-ter pt-5  ml-5">Approve Estimate</h2>
        <section className="tile is-ancestor pb-6  ml-5" >
            <div className="tile is-parent pb-6 pt-5 ">

                <div className="tile pb-6 is-child">

                    <div className="title" > {estimate?.workOrder?.address} </div>
                    <div className="subtitle mt-4" > {estimate.estimateDate} </div>
                    <div className="content" >  {estimate?.workOrder?.description} </div>
                    <div className="content">  ${estimate.price} </div>




                    <form>
                        <div className="field">
                            <div className="control">

                                <label className="checkbox"> Approved:</label>
                                <input type="checkbox" className="checkbox"
                                    value={estimate.approved}
                                    onChange={
                                        (evt) => {
                                            const copy = { ...estimate }
                                            copy.approved = evt.target.checked
                                            setEstimate(copy)

                                        }
                                    } />
                            </div>
                        </div>
                    </form>
                    <button

                        onClick={(evt) => {
                            handleButtonClick(evt)
                        }}
                        className="button is-dark my-6 ml-6">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    </article>
    )

}
