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



return <>
    {
        <RequestDetails address={workOrder.address} description={workOrder.description}/>
    }
    {
        <form className="ticketForm">
            <h2 className="invoiceForm__title">Create Estimate</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimateDate"> Estimate Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        step="any"
                        className="form-control"
                        placeholder="estimateDate"
                        value={estimate.estimateDate}
                        onChange={
                            (evt) => {
                                const copy = { ...estimate }
                                copy.estimateDate = evt.target.value
                                setEstimate(copy)

                            }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate"> Start Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        step="any"
                        className="form-control"
                        placeholder="startDate"
                        value={estimate.startDate}
                        onChange={
                            (evt) => {
                                const copy = { ...estimate }
                                copy.startDate = evt.target.value
                                setEstimate(copy)

                            }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimatePrice">Estimated Price:</label>
                    <input
                        required autoFocus
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Amount Owed"
                        value={estimate.price}
                        onChange={
                            (evt) => {
                                const copy = { ...estimate }
                                copy.price = evt.target.value === "" ? 0 : parseFloat(evt.target.value, 2)
                                setEstimate(copy)

                            }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="workAccepted"> Work Accepted:</label>
                    <input type="checkbox"
                        value={workOrder.accepted}
                        onChange={
                            (evt) => {
                                const copy = { ...workOrder }
                                copy.accepted = evt.target.checked
                                setworkOrder(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(evt) => {
                    handleButtonClick(evt)
                }}
                className="btn btn-primary">
                Submit Estimate
            </button>
        </form>

    }
</>
} 