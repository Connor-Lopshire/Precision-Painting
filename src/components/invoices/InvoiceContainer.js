import { useState } from "react"
import  {InvoiceList}  from "./Invoices"
import { InvoiceSearch } from "./InvoiceSearch"

export const InvoiceContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <InvoiceSearch setterFunction={setSearchTerms} />
        <InvoiceList searchTermState={searchTerms} />

    </>
}