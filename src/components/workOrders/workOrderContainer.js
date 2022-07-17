import { useState } from "react"
import { WorkOrderList } from "./WorkOrderList"
import { WorkOrderSearch } from "./workOrderSearch"

export const WorkOrderContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
     <WorkOrderSearch setterFunction={setSearchTerms} />
     <WorkOrderList searchTermState={searchTerms}/>

    </>
}