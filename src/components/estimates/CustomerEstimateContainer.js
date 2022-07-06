import { useState } from "react"
import { CustomerEstimateList } from "./CustomerEstimateList"
import { CustomerEstimateSearch } from "./CustomerEstimateSearch"

export const CustomerEstimateContainer = () => {
    const [searchTerms, setSeachTerms] = useState("")

    return <>
     <CustomerEstimateSearch setterFunction={setSeachTerms} />
     <CustomerEstimateList searchTermState={searchTerms}/>

    </>
}