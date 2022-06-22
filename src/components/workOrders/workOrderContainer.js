import { WorkOrderList } from "./WorkOrderList"
import { workOrderSearch } from "./workOrderSearch"

export const workOrderContainer = () => {
    const [searchTerms, setSeachTerms] = useState("")

    return <>
     <workOrderSearch setterFunction={setSeachTerms} />
     <WorkOrderList searchTermState={searchTerms}/>

    </>
}