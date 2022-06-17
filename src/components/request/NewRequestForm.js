
// landing place for "New Request" button 
// going to POST to http://localhost:8088/workOrders
// need workOrder useState with initial state object 
//      
    // "userId": usesrObject.id,
    // "address": "",
    // "date": "",
    // "description": "",
    // "accepted": false
// 
// need a form that takes in address description and date and updates the state object with the values 
//  when submit button is hit the state object will be posted and user will return to request list 
//  add route to Customerview
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewRequestForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [workOrder, update] = useState({
        address: "",
        date: "",
        description: "",
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localPaintUser = localStorage.getItem("paint_user")
    const paintUserObject = JSON.parse(localPaintUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        const workOrderToSendToApi = {
            userId: paintUserObject.id,
            description: workOrder.description,
            address: workOrder.address,
            date: workOrder.date,
            accepted: false
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/workOrders`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workOrderToSendToApi)
        })
            .then(response => response.json())
            .then(() => {
                 navigate("/request")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="requestForm__title">New Work Order Request</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={workOrder.description}
                        onChange={
                            (evt) => {
                                const copy = {...workOrder}
                                copy.description = evt.target.value
                                update(copy)
                                
                                } } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={workOrder.address}
                        onChange={
                            (evt) => {
                                const copy = {...workOrder}
                                copy.address = evt.target.value
                                update(copy)
                                
                                } } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate"> Request Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        step="any"
                        className="form-control"
                        placeholder="startDate"
                        value={workOrder.date}
                        onChange={
                            (evt) => {
                                const copy = { ...workOrder }
                                copy.date = evt.target.value
                                update(copy)

                            }} />
                </div>
            </fieldset>
            <button 
            onClick={ (clickEvent) => {
                handleSaveButtonClick(clickEvent)
            }}
            className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}