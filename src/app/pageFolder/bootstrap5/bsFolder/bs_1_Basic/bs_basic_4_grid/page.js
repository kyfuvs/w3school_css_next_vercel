import BS_basic_p_4_grid from "./bs_basic_p_4_grid"
import BS_Sidebar from "../../bs_Sidebar/page"

const BS_basic_4_grid=()=>{
  return(
    <div>
      <div>
         <BS_Sidebar/>
      </div>
      <div>
          <BS_basic_p_4_grid/>
      </div>
    </div>
      
  )
}
export default BS_basic_4_grid