import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// add to CustomerViews
export const InvoiceDetails = () => {
    const [invoice, setInvoice] = useState({
        completed: false
    })
    
    const navigate = useNavigate()





    const { invoiceId } = useParams()
    useEffect(
        () => {
            fetch(`http://localhost:8088/invoices?_expand=workOrder&id=${invoiceId}`)
                .then(response => response.json())
                .then((invoiceObject) => {
                    setInvoice(invoiceObject[0])
                })
        }, []
    )
    const handleButtonClick = (event) => {
      
        // post or put first ? 
        
        return fetch(`http://localhost:8088/invoices/${invoiceId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(invoice)
        })
            .then(response => response.json())
            .then(() => {
               navigate("/invoices")
    } )
}
   
    return (
        <section>

            <div>

                <div> {invoice?.workOrder?.address} </div>
                <div> {invoice?.workOrder?.description} </div>
                <div>  {invoice.amountOwed} </div>
                <div> {invoice.dateCompleted} </div>
            </div>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="aprroval"> Complete:</label>
                        <input type="checkbox"
                            value={invoice.completed}
                            onChange={
                                (evt) => {
                                    const copy = { ...invoice }
                                    copy.completed = evt.target.checked
                                    setInvoice(copy)
                                    
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
