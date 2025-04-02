import Css_Sidebar from "../../css_Sidebar/page"
import Css_Sidebar_Dev from "../../css_Sidebar_Dev/page";
import Basic_p_2_intro from './basic_p_2_intro';
const Basic_2_intro=()=>{
    return (
        <div>
            <div>
              <Css_Sidebar/>
            </div>

            <div className="flex-grow-1 ">
              <Basic_p_2_intro/>
            </div>
        </div>
    );
};
export default Basic_2_intro;