// deconstruct prop to form detailed estimate order card for above form 
export const WorkOrderDetails = ({address, description, startDate, estimatePrice}) => {
    return <section className="tile is-parent pt-5 ">
    

        <div className="tile is-child ">
        <div className="title">{address}</div>
        <div className="subtitle">{startDate}</div>
        <div className="content">{description}</div>
        <div className="content">${estimatePrice}</div>
        </div>
      
       


    </section>
}