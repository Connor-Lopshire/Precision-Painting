// component to display accepted.false work orders
//  fetch http://localhost:8088/workOrders?accepted=false
// useState for workOrders and for filteredWorkOrders
//  for staff estimates.map and send a prop for Request with keys to build link list items 
// 
// pretty much same as WorkOrders Component for customer
// for customer "New Request" button will appear above list and take user to a form for creating work order
// component will go to both employee and customer views

import { useEffect, useState } from "react"
import { Request } from "./Request"


export const RequestList = () => {
    const [requestList, setRequestList ] = useState([])
    const [filteredRequestList, setFilteredRequestList] = useState([])
    const localePaintUser = localStorage.getItem("paint_user")
    const paintUserObject = JSON.parse(localePaintUser)

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
            const myRequest = requestList.filter(request => request.id === paintUserObject.id)
            setFilteredRequestList(myRequest)

        }, [requestList]
    )
    return <article>
            <h2>Requested Work</h2>

        {paintUserObject.staff === true
            ? <>{
                requestList.map(request => <Request key={`employeeRequest--${request.id}`} id={request.id}  address={request.address} date={request.date}/>)
            }
            </>
            : <>
                {filteredRequestList.map((request) => {
                    return <section key={`request--${request.id}`}>

                        <div>{request.address}</div> <div>Date Requested:{request.date}</div>
                    </section>
                })
                }
            </>




        }

    </article>
}