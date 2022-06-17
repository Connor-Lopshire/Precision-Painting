// fetch http://localhost:8088/invoices/?_expand=workOrder&completed=false
// useState for both invoices and filteredInvoices
// staff sees all invoices 
// customer sees filteredInvoices with button that makes completed=true
// send to both employee and customer views
import { useEffect, useState } from "react"
import { Invoice } from "./Invoice"

export const InvoiceList = () => {
    const [invoices, setInvoices] = useState([])
    const [filteredInvoices, setFilteredInvoices] = useState([])
    const localePaintUser = localStorage.getItem("paint_user")
    const paintUserObject = JSON.parse(localePaintUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/invoices/?_expand=workOrder&completed=false`)
                .then(response => response.json())
                .then((workOrderArray) => {
                    setInvoices(workOrderArray)
                })
        },
        [] // When this array is empty, 

    )
    useEffect(
        () => {
            const myInvoices = invoices.filter(invoice => invoice?.workOrder?.userId === paintUserObject.id)
            setFilteredInvoices(myInvoices)

        }, [invoices]
    )
    return <article>
        <h2> Incomplete Invoices</h2>

        {paintUserObject.staff === true
            ? <>{
                invoices.map((invoice) => {
                    return <> 
                        <div>{invoice.workOrder.address}</div>
                        <div>{invoice.dateCompleted}</div>
                        <div>{invoice.amountOwed}</div>


                    </>
                })
            }
            </>
            : <>
                {filteredInvoices.map( (invoice) => <Invoice id={invoice.id} address={invoice.workOrder.address} dateCompleted={invoice.dateCompleted} amountOwed={invoice.amountOwed} /> )
                }
            </>




        }

    </article>
}