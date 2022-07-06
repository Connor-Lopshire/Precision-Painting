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
   
    return (<article  className=" has-background-white-ter  pb-6 pt-3">

<h2 className="title is-2  has-background-white-ter  mt-5 ml-5">Complete Invoice</h2>
        <section  className="tile is-ancestor  pb-6 ml-5">

<div className="tile is-parent  pb-6 pt-5 ">
<div   className="tile pb-6 is-child ">

                <div className="title"> {invoice?.workOrder?.address} </div>
                <div  className="subtitle mt-4"> {invoice.dateCompleted} </div>
                <div className="content"> {invoice?.workOrder?.description} </div>
                <div className="content">  ${invoice.amountOwed} </div>
            <form>
                    <div className="field">
                        <div className="control"> 

                        <label className="checkbox" > Complete:</label>
                        <input className="checkbox" type="checkbox"
                            value={invoice.completed}
                            onChange={
                                (evt) => {
                                    const copy = { ...invoice }
                                    copy.completed = evt.target.checked
                                    setInvoice(copy)
                                    
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
