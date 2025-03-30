import Css_sidebar from "../css_sidebar";
import CSS_p_Syntax from "./css_p_syntax";

const CSS_Syntax=()=>{
    return (
        <div >
            <div className="row">
                <div className="col-2 bg-dark border-top">
                    <Css_sidebar/>
                </div>
                <div className="col-10">
                    <CSS_p_Syntax/>
                </div>
            </div>
            
        </div>
    );
};
export default CSS_Syntax;