import Css_Sidebar from "../../css_Sidebar/page"
import Css_Sidebar_Dev from "../../css_Sidebar_Dev/page";
import Basic_p_1_home from "./basic_p_1_home";
const Basic_1_home=()=>{
    return (
        // <div className="d-flex flex-row flex-nowrap">
        <div>
            <div>
              <Css_Sidebar/>
              {/* <Css_Sidebar_Dev/> */}
            </div>

            <div className="flex-grow-1 ">
              <Basic_p_1_home/>
            </div>
        </div>
    );
};
export default Basic_1_home;