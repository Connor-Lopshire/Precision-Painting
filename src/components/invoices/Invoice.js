import { Link } from "react-router-dom"

export const Invoice = ({address, dateCompleted, amountOwed, id}) => {
    return <section className="activeWorkOrder" >
    <div>
        <Link to={`/invoiceDetails/${id}`} >{address}</Link>
        </div>
    <div>Date Completed{dateCompleted}</div>
    


</section>
}