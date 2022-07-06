// component to display accepted.false work orders
//  fetch http://localhost:8088/workOrders?accepted=false
// useState for workOrders and for filteredWorkOrders
//  for staff estimates.map and send a prop for Request with keys to build link list items 
// 
// pretty much same as WorkOrders Component for customer
// for customer "New Request" button will appear above list and take user to a form for creating work order
// component will go to both employee and customer views

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Request } from "./Request"


export const RequestList = ({searchTermState}) => {
    const [requestList, setRequestList] = useState([])
    const [filteredRequestList, setFilteredRequestList] = useState([])
    const localePaintUser = localStorage.getItem("paint_user")
    const paintUserObject = JSON.parse(localePaintUser)
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/workOrders?accepted=false`)
                .then(response => response.json())
                .then((requestArray) => {
                    setRequestList(requestArray)
                })
        },
        [] // When this array is empty, 

    )
    useEffect(
        () => {
            const searchedWorkOrder = requestList.filter( request => request.address.toLowerCase().includes(searchTermState.toLowerCase()))
            
            setFilteredRequestList(searchedWorkOrder)

        }, [searchTermState]
    )
    useEffect(
        () => {
            if (paintUserObject.staff === true) {
                setFilteredRequestList(requestList)
            }
            else {

                const myRequest = requestList.filter(request => request.userId === paintUserObject.id)
                setFilteredRequestList(myRequest)
            }

        }, [requestList]
    )
    return <article className=" has-background-white-ter pt-3 pr-5 pl-5 pb-6">
      

        {paintUserObject.staff === true
            ? <>{
                filteredRequestList.map(request => <Request key={`employeeRequest--${request.id}`} id={request.id} address={request.address} date={request.date} />)
            }
            </>
            : <>
                <button  className="button is-dark my-6 ml-3" onClick={() => navigate("/NewRequestForm")}>Create Work Request</button>
                {filteredRequestList.map((request) => {
                    return <section className="tile is-parent box has-background-white-ter" key={`request--${request.id}`}>
                        <div className="tile is-child">{request.address}</div> 
                        <div className="tile is-child">Date Requested: {request.date}</div>
                    </section>
                })
                }
            </>




        }

    </article>
}