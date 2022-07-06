import { useState } from "react"
import { RequestList } from "./RequestList"
import { RequestSearch } from "./RequestSearch"


export const RequestContainer = () => {
    const [searchTerms, setSeachTerms] = useState("")

    return <>
     <RequestSearch setterFunction={setSeachTerms} />
     <RequestList searchTermState={searchTerms}/>

    </>
}