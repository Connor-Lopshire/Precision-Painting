import { useState } from "react"
import { WorkOrderList } from "./WorkOrderList"
import { WorkOrderSearch } from "./workOrderSearch"

export const WorkOrderContainer = () => {
    const [searchTerms, setSeachTerms] = useState("")

    return <>
     <WorkOrderSearch setterFunction={setSeachTerms} />
     <WorkOrderList searchTermState={searchTerms}/>

    </>
}