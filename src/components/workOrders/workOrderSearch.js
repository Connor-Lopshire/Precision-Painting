export const WorkOrderSearch = ({setterFunction}) => {
    return (
        <div className="has-background-white-ter">
        <div className=" column ml-5  is-3 has-background-white-ter">
        <h2 className="title is-2 pt-6">Active Work</h2>
            <div className="field">
            <div className="control">

            <input className="input  is-rounded"
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder=" Search Address" /> 
            </div>
            </div>
            </div>
    
        </div>
    )
    }