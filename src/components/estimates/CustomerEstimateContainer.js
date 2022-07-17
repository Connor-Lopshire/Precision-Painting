import { useState } from "react"
import {CustomerEstimateList}  from "./CustomerEstimateList"
import { CustomerEstimateSearch } from "./CustomerEstimateSearch"

export const CustomerEstimateContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
     <CustomerEstimateSearch setterFunction={setSearchTerms} />
     <CustomerEstimateList searchTermState={searchTerms}/>

    </>
}