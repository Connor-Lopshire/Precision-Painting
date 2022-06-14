// going to be a PUT to workOrders and POST to estimates
// need state varaible for workOrder to display 
// need acceptedWorkOrder state varaible to hold changes to put to /workOrders/${workOrderId} - initial state - {
// accepted = true  
// }
// need state variable to hold input from form in an  object we are going to post- initial state is
// {"workOrderId": param workOrderId,
// "estimateDate": "",
// "startDate": "",
// "price": 0,
// "approved": false,
// "completed": false}
// fetch the workOrder with mathching param workOrderId and display
// under workOder display form that takes in estimatedate -startDate-and- price
// when submit button for form is hit should post new estimate  and put new accepted: true on workOrder
// route in EmployeeView