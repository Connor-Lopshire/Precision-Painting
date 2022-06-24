import { useState } from "react"
import { InvoiceList } from "./Invoices"
import { InvoiceSearch } from "./InvoiceSearch"

export const InvoiceContainer = () => {
    const [searchTerms, setSeachTerms] = useState("")

    return <>
     <InvoiceSearch setterFunction={setSeachTerms} />
     <InvoiceList searchTermState={searchTerms}/>

    </>
}