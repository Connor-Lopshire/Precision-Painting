//  display list of open work orders  (estimate.approved = true & estimate. complete = false )
// need http://localhost:8088/estimates?_expand=workOrder&approved=true&completed=false
// for staff prop to WorkOrder
//  for customer need to only display tickets for the logged in user
//  useState for  initial state for work orders 
//  useState for filterdWorkOrders
// useEffect setworkOrders 
// useEffect if userObject.staff = true setFilteredWorkOrders(workOrders)~maybe a prop in if~  else workOrders.filter workOrder.userId === localeStorageUser.id and setFitleredWorkOrders(.filter[])
//  map and display filteredWorkOrders
//  give this component  to both Customer and Employee View

import { useEffect, useState } from "react"
import { WorkOrder } from "./WorkOrder"

export const WorkOrderList = ({searchTermState}) => {
    const [activeWorkOrders, setActiveWorkOrders] = useState([])
    const [filteredWorkOrders, setFilteredWorkOrders] = useState([])
    const localePaintUser = localStorage.getItem("paint_user")
    const paintUserObject = JSON.parse(localePaintUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/estimates?_expand=workOrder&approved=true&completed=false`)
                .then(response => response.json())
                .then((workOrderArray) => {
                    setActiveWorkOrders(workOrderArray)
                })
        },
        [] // When this array is empty, 

    )
    useEffect(
        () => {
            const searchedWorkOrder = activeWorkOrders.filter( order => order.workOrder.address.toLowerCase().includes(searchTermState.toLowerCase()))
            
            setFilteredWorkOrders(searchedWorkOrder)

        }, [searchTermState]
    )
    useEffect(
        () => {
            if (paintUserObject.staff === true) {
                setFilteredWorkOrders(activeWorkOrders)
            }
            else {

                const myWorkOrders = activeWorkOrders.filter(order => order?.workOrder?.userId === paintUserObject.id)
                setFilteredWorkOrders(myWorkOrders)
            }

        }, [activeWorkOrders]
    )
    return <article className="has-background-white-ter pt-4 pr-5 pl-5">
        

        {paintUserObject.staff === true
            ? <>{
                filteredWorkOrders.map(order => <WorkOrder key={`employeeActiveWorkOrders--${order.id}`} id={order.id}  address={order.workOrder.address} date={order.startDate}/>)
            }
            </>
            : <>
                {filteredWorkOrders.map((order) => {
                    return <section className="tile is-parent box has-background-white-ter mt-5" key={`activeWorkOrder--${order.id}`}>
                       

                        <div className="tile is-child   ">{order.workOrder.address}</div> 

                        <div className="tile is-child ">Date Started: {order.startDate}</div>
                        
                    </section>
                })
                }
            </>




        }

    </article>
}