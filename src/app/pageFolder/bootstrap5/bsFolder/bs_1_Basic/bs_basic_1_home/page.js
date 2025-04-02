import BS_basic_p_1_home from "./bs_basic_p_1_home"
import BS_Sidebar from "../../bs_Sidebar/page"

const BS_basic_1_home=()=>{
  return(
    <div>
      <div>
         <BS_Sidebar/>
      </div>
      <div>
          <BS_basic_p_1_home/>
      </div>
    </div>
      
  )
}
export default BS_basic_1_home