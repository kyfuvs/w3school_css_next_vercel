import DD_bs_1_basic from "./bs_bodyFolder/dd_bs_1_basic";
import DD_bs_2_forms from "./bs_bodyFolder/dd_bs_2_forms";
import DD_bs_3_grid from "./bs_bodyFolder/dd_bs_3_grid";
import DD_bs_4_other from "./bs_bodyFolder/dd_bs_4_other";

const Body_bs_side_canvas=()=>{
    return(
        // <div className="offcanvas-body" >
        <div>
            <DD_bs_1_basic/>
            <DD_bs_2_forms/>
            <DD_bs_3_grid/>
            <DD_bs_4_other/>
        
        </div>
    )
}
export default Body_bs_side_canvas;