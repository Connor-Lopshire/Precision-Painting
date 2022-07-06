export const RequestDetails = ({address, description}) => {
    return <section className="tile is-parent pt-5">
   <div className="tile is-child">

   <div className="title">{address}</div>
    <div className="content">{description}</div>
   </div>
    

    </section>
}