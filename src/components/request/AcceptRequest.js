// going to be a PUT to workOrders and POST to estimates
// need state varaible for workOrder to display 
// need acceptedWorkOrder state varaible to hold changes to put to /workOrders/${workOrderId} - initial state - {
// accepted = true  
// }
// need state variable to hold input from form in an  object we are going to post- initial state is
// {"workOrderId": param workOrderId,
// "estimateDate": "",
// "startDate": "",
// "price": 0,
// "approved": false,
// "completed": false}
// fetch the workOrder with mathching param workOrderId and display
// under workOder display form that takes in estimatedate -startDate-and- price
// when submit button for form is hit should post new estimate  and put new accepted: true on workOrder
// route in EmployeeView
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RequestDetails } from "./RequestDetails"


//  how to double pass props
export const AcceptRequest = () => {
    const { workOrderId } = useParams()
    const [workOrder, setworkOrder] = useState({
        accepted: false
    }

    )
    const [estimate, setEstimate] = useState({
        estimateDate: "",
        startDate: "",
        price: 0,
    })
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/workOrders?id=${workOrderId}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        const singleEstimate = data[0]
                        setworkOrder(singleEstimate)
                    }
                )
        }, [workOrderId]
    )
    const handleButtonClick = (event) => {
        event.preventDefault()
        // post or put first ? 
        const estimateForAPI = {
            workOrderId:  workOrderId,
            estimateDate: estimate.estimateDate,
            startDate: estimate.startDate,
            price: estimate.price,
            approved: false,
            completed: false
        }
    
    return fetch(`http://localhost:8088/workOrders/${workOrderId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workOrder)
    })
        .then(response => response.json())
        .then(() => {
            fetch(`http://localhost:8088/estimates`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estimateForAPI)
            })
                .then(response => response.json())
                .then(() => {
                    navigate("/request")
                })
        })
}



return <article className="has-background-white-ter px-6 py-5">
    {
        <RequestDetails address={workOrder.address} description={workOrder.description}/>
    }
    {
        <form className="ticketForm">
            <h2 className="title">Create Estimate</h2>
            <div className="field">
                    <label className="label"> Estimate Date:</label>
                <div className="control">
                    <input
                        required autoFocus
                        type="date"
                        step="any"
                        className="input is-rounded"
                        placeholder="estimateDate"
                        value={estimate.estimateDate}
                        onChange={
                            (evt) => {
                                const copy = { ...estimate }
                                copy.estimateDate = evt.target.value
                                setEstimate(copy)

                            }} />
                </div>
            </div>
            <div className="field">
                    <label className="label"> Start Date:</label>
                <div className="control">
                    <input
                        required autoFocus
                        type="date"
                        step="any"
                        className="input is-rounded"
                        placeholder="startDate"
                        value={estimate.startDate}
                        onChange={
                            (evt) => {
                                const copy = { ...estimate }
                                copy.startDate = evt.target.value
                                setEstimate(copy)

                            }} />
                </div>
            </div>
            <div className="field">
                    <label className="label">Estimated Price:</label>
                <div className="control">
                    <input
                        required autoFocus
                        type="number"
                        step="any"
                        className="input is-rounded"
                        placeholder="Amount Owed"
                        value={estimate.price}
                        onChange={
                            (evt) => {
                                const copy = { ...estimate }
                                copy.price = evt.target.value === "" ? 0 : parseFloat(evt.target.value, 2)
                                setEstimate(copy)

                            }} />
                </div>
            </div>
            <div className="field mt-5">
                <div className="control">
                    <label className="checkbox"> Work Accepted:</label>
                    <input type="checkbox"
                    className="checkbox"
                        value={workOrder.accepted}
                        onChange={
                            (evt) => {
                                const copy = { ...workOrder }
                                copy.accepted = evt.target.checked
                                setworkOrder(copy)
                            }
                        } />
                </div>
            </div>

            <button
                onClick={(evt) => {
                    handleButtonClick(evt)
                }}
                className="button is-dark my-6">
                Submit Estimate
            </button>
        </form>

    }
</article>
} 