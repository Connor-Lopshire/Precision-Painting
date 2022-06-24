// useState for estimate
//  fetch estimate http://localhost:8088/estimates?_expand=workOrder&completed=false&id=${estimateId}
// display estimate detailed info- another component prop ?
// display form to take in date completed and amount owed 
// on click POST {
// workOrderId": estimate.workOrderId,
//     "estimateId": estimate.id,
//     "dateCompleted": "userInput",
//     "amountOwed": "userInput",
//     "completed": false ,
// // } to http://localhost:8088/invoices 
// // and PUT  { completed: true } to http://localhost:8088/estimates/${estimateId}
// return user to /workOrder
// give component to employee View

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { WorkOrderDetails } from "./WorkOrderDetails"

//  how to double pass props
export const CompleteWorkOrder = () => {
    const { estimateId } = useParams()
    const [estimate, setEstimate] = useState({
        completed: false
    }

    )
    const [invoice, setInvoice] = useState({
        dateCompleted: "",
        amountOwed: 0,
        completed: false
    })
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/estimates?_expand=workOrder&completed=false&id=${estimateId}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        const singleEstimate = data[0]
                        setEstimate(singleEstimate)
                    }
                )
        }, [estimateId]
    )
    const handleButtonClick = (event) => {
        event.preventDefault()
        // post or put first ? 
        const newInvoice = {
            workOrderId: estimate.workOrder.id,
            estimateId: estimate.id,
            dateCompleted: invoice.dateCompleted,
            amountOwed: invoice.amountOwed,
            completed: false
        }
        return fetch(`http://localhost:8088/estimates/${estimateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(estimate)
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/invoices`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newInvoice)
                })
                    .then(response => response.json())
                    .then(() => {
                        navigate("/workOrders")
                    })
            })

    }

    return <article className="has-background-white-ter px-6 py-5">
        {
            <WorkOrderDetails address={estimate?.workOrder?.address} description={estimate?.workOrder?.description}
                startDate={estimate.startDate} estimatePrice={estimate.price} />
        }
        {
            <form >
                <h2 className="title">Create Invoice</h2>

                <div className="field">
                    <label className="label"> Date Completed:</label>
                    <div className="control">

                        <input
                            required autoFocus
                            type="date"
                            step="any"
                            className="input is-rounded"
                            placeholder="dateCompleted"
                            value={invoice?.dateCompleted}
                            onChange={
                                (evt) => {
                                    const copy = { ...invoice }
                                    copy.dateCompleted = evt.target.value
                                    setInvoice(copy)

                                }} />
                    </div>
                </div>

                <div className="field">
                        <label className="label">Amount Owed:</label>
                    <div className="control">
                        <div className="control">

                            <input
                                required autoFocus
                                type="number"
                                step="any"
                                className="input is-rounded"
                                placeholder="Amount Owed"
                                value={invoice?.amountOwed}
                                onChange={
                                    (evt) => {
                                        const copy = { ...invoice }
                                        copy.amountOwed = evt.target.value === "" ? 0 : parseFloat(evt.target.value, 2)
                                        setInvoice(copy)

                                    }} />
                        </div>
                    </div>
                </div>
                <div className="field mt-5">
                    <div className="control">
                        <label className="checkbox"> Work Complete
                        <input type="checkbox" className="checkbox"
                            value={estimate.completed}
                            onChange={
                                (evt) => {
                                    const copy = { ...estimate }
                                    copy.completed = evt.target.checked
                                    setEstimate(copy)
                                }
                            } />
                            </label>
                    </div>
                </div >

                <button className="button is-dark my-6"
                    onClick={(evt) => {
                        handleButtonClick(evt)
                    }}
                >
                    Submit Invoice
                </button>
            </form>

}
</article>
}