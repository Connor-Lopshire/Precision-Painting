//  display list of open work orders  (estimate.approved = true & estimate. complete = false )
// need http://localhost:8088/estimates?_expand=workOrder&approved=true&completed=false
// for staff should list all work orders and  items should be click able
//  for customer need to only display tickets for the logged in user
//  useState for  initial state for work orders 
// then useState for filterdWorkOrders
// useEffect setworkOrders 
// useEffect if userObject.staff = true setFilteredWorkOrders(workOrders)  else workOrders.filter workOrder.userId === localeStorageUser.id and setFitleredWorkOrders(.filter[])
//  map and display filteredWorkOrders

 