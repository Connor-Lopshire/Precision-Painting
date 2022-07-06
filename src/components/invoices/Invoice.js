import { Link } from "react-router-dom"

export const Invoice = ({address, dateCompleted, amountOwed, id}) => {
    return <section className=" tile box is-parent has-background-white-ter">
 
        <Link className="tile is-child has-text-grey-dark" to={`/invoiceDetails/${id}`} >{address}</Link>
        
    <div className="tile is-child">Date Completed: {dateCompleted}</div>
    


</section>
}