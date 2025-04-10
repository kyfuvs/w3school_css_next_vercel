import BS_basic_p_3_container from "./bs_basic_p_3_container"
import BS_Sidebar from "../../bs_Sidebar/page"

const BS_basic_3_container=()=>{
  return(
    <div>
      <div>
         <BS_Sidebar/>
      </div>
      <div>
          <BS_basic_p_3_container/>
      </div>
    </div>
      
  )
}
export default BS_basic_3_container