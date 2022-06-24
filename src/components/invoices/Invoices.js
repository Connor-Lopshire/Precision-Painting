// fetch http://localhost:8088/invoices/?_expand=workOrder&completed=false
// useState for both invoices and filteredInvoices
// staff sees all invoices 
// customer sees filteredInvoices with button that makes completed=true
// send to both employee and customer views
import { useEffect, useState } from "react"
import { Invoice } from "./Invoice"

export const InvoiceList = ({searchTermState}) => {
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
            const searchedWorkOrder = invoices.filter( invoice => invoice.workOrder.address.toLowerCase().includes(searchTermState.toLowerCase()))
            
            setFilteredInvoices(searchedWorkOrder)

        }, [searchTermState] 
        )
    useEffect(
        () => {
            if (paintUserObject.staff === true) {
                setFilteredInvoices(invoices)
            }
            else {

                const myInvoices = invoices.filter(invoice => invoice?.workOrder?.userId === paintUserObject.id)
                setFilteredInvoices(myInvoices)
            }

        }, [invoices]
    )
    return <article className="column has-background-white-ter pb-6 pt-6 pl-5 pr-5">
        
        {paintUserObject.staff === true
            ? <>{
                filteredInvoices.map((invoice) => {
                    return <section className=" tile box is-parent has-background-white-ter"> 
                        <div className="tile is-child">{invoice.workOrder.address}</div>
                        <div className="tile is-child">{invoice.dateCompleted}</div>
                        <div className="tile is-child">{invoice.amountOwed}</div>


                    </section>
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