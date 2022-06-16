// deconstruct prop to form detailed estimate order card for above form 
export const WorkOrderDetails = ({address, description, startDate, estimatePrice}) => {
    return <section>
        
        <div>{address}</div>
        <div>{description}</div>
        <div>{startDate}</div>
        <div>{estimatePrice}</div>
       


    </section>
}